import fs from "fs";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/healthtechmedics/" : "/",
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    mode === "development" && {
      name: "local-site-content-save",
      configureServer(server) {
        server.middlewares.use("/__save-site-content", (req, res) => {
          if (req.method !== "POST") {
            res.statusCode = 405;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({ ok: false, error: "Method not allowed" }));
            return;
          }

          let body = "";

          req.on("data", (chunk) => {
            body += chunk;
          });

          req.on("end", () => {
            try {
              const parsed = JSON.parse(body);
              const nextContent = parsed?.content;

              if (!nextContent || typeof nextContent !== "object") {
                throw new Error("Invalid content payload");
              }

              const targetFile = path.resolve(__dirname, "src/content/siteContent.ts");
              const fileContents = `/*
 * Update site copy here for production.
 *
 * In local development you can use the on-page Edit Mode, then click
 * "Save to content file" to write changes back here automatically,
 * or use "Copy updated content JSON" if you prefer to paste manually.
 *
 * Keeping visible copy in one place makes future editing and review easier.
 */
export const defaultSiteContent = ${JSON.stringify(nextContent, null, 2)} as const;

export type SiteContent = typeof defaultSiteContent;
`;

              fs.writeFileSync(targetFile, fileContents, "utf8");

              res.statusCode = 200;
              res.setHeader("Content-Type", "application/json");
              res.end(JSON.stringify({ ok: true }));
            } catch (error) {
              res.statusCode = 500;
              res.setHeader("Content-Type", "application/json");
              res.end(
                JSON.stringify({
                  ok: false,
                  error: error instanceof Error ? error.message : "Failed to save content file",
                }),
              );
            }
          });
        });
      },
    },
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
