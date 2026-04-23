import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import { DefaultProviders } from "./components/providers/default";
import { getRouterBasename } from "./lib/utils";
import AProposPage from "./pages/a-propos/page";
import AuthCallback from "./pages/auth/Callback";
import ContactPage from "./pages/contact/page";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProjetsPage from "./pages/projets/page";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <DefaultProviders>
      <BrowserRouter basename={getRouterBasename()}>
        <ScrollToTop />
        <Routes>
          <Route path="/auth/callback" element={<AuthCallback />} />
          <Route path="/" element={<Index />} />
          <Route element={<AppLayout />}>
            <Route path="/projets" element={<ProjetsPage />} />
            <Route path="/a-propos" element={<AProposPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </DefaultProviders>
  );
}
