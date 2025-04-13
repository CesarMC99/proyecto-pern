import { Footer } from "@/shared/components/footer/footer";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <div>
      Layout
      <Outlet />
      <div className="h-screen"></div>
      <Footer />
    </div>
  );
}
