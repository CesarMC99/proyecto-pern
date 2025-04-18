import { DressStyle } from "@/sections/dress-style/dress-style";
import { OurHappyCustomer } from "@/sections/our-happy-customers/our-happy-customer";
import { Footer } from "@/shared/components/footer/footer";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <div>
      Layout
      <Outlet />
      <div className="h-screen">s</div>
      <DressStyle />
      <hr className="my-10 border-0" />
      <OurHappyCustomer />
      <Footer />
    </div>
  );
}
