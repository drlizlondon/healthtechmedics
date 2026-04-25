import { chromium } from "playwright";
import { mkdirSync, readdirSync } from "fs";

const dir = "/Users/lizzie/healthtechmedics/screenshots";

const routes = [
  { name: "home", url: "http://127.0.0.1:4173/" },
  { name: "services", url: "http://127.0.0.1:4173/services" },
  { name: "workshops", url: "http://127.0.0.1:4173/workshops" },
  { name: "lab", url: "http://127.0.0.1:4173/lab" },
  { name: "about", url: "http://127.0.0.1:4173/about" },
  { name: "contact", url: "http://127.0.0.1:4173/contact" },
];

mkdirSync(dir, { recursive: true });

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({
  viewport: { width: 1440, height: 1200 },
  deviceScaleFactor: 1,
});

for (const route of routes) {
  await page.goto(route.url, { waitUntil: "networkidle" });
  await page.screenshot({
    path: `${dir}/${route.name}.png`,
    fullPage: true,
  });
}

await browser.close();

console.log(readdirSync(dir).join("\n"));
