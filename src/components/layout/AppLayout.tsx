import { Outlet } from "react-router-dom";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <Outlet />
      <SiteFooter />
    </div>
  );
}
