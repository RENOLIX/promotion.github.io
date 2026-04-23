import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import { DefaultProviders } from "./components/providers/default";
import { getRouterBasename } from "./lib/utils";
import AProposPage from "./pages/a-propos/page";
import AuthCallback from "./pages/auth/Callback";
import ContactPage from "./pages/contact/page";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProjetsPage from "./pages/projets/page";

export default function App() {
  return (
    <DefaultProviders>
      <BrowserRouter basename={getRouterBasename()}>
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
