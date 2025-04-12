import HomePage from "@/pages/home";
import Layout from "@/shared/components/layout";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [{ index: true, Component: HomePage }],
  },
]);
