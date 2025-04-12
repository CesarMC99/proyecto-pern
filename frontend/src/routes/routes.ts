import Layout from "@/layouts/layout";
import Home from "@/pages/home";
import { createBrowserRouter } from "react-router";

export const routes = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [{ index: true, Component: Home }],
  },
]);
