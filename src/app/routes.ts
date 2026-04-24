import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { CategoryGallery } from "./pages/CategoryGallery";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/category/:categoryId",
    Component: CategoryGallery,
  },
]);
