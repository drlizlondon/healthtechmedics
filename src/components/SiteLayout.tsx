import { ReactNode } from "react";
import EditModePanel from "@/components/content/EditModePanel";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

interface SiteLayoutProps {
  children: ReactNode;
}

const SiteLayout = ({ children }: SiteLayoutProps) => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <main className="pt-24 md:pt-28">{children}</main>
    <Footer />
    <EditModePanel />
  </div>
);

export default SiteLayout;
