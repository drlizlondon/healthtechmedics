import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { SiteContentProvider } from "@/components/content/SiteContentProvider";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/ScrollToTop";
import AboutPage from "@/pages/About";
import ContactPage from "@/pages/Contact";
import HomePage from "@/pages/Home";
import LabPage from "@/pages/Lab";
import NotFound from "@/pages/NotFound";
import ServicesPage from "@/pages/Services";
import WorkshopsPage from "@/pages/Workshops";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <SiteContentProvider>
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/workshops" element={<WorkshopsPage />} />
            <Route path="/lab" element={<LabPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </SiteContentProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
