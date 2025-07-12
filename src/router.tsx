import { createBrowserRouter, Navigate } from "react-router-dom";
import {
  Categories,
  CategoryProducts,
  NotFound,
  ProductCreate,
  ProductDetail,
  ProductEdit,
  ProductSearch,
  ProductsList
} from "@/pages";
import Layout from "@/components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/products" replace />,
    errorElement: <NotFound />
  },
  {
    path: "/products",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <ProductsList />
      },
      {
        path: "search",
        element: <ProductSearch />
      },
      {
        path: "categories",
        element: <Categories />
      },
      {
        path: "category/:category",
        element: <CategoryProducts />,
        children: [{ path: ":category" }]
      },
      {
        path: "new",
        element: <ProductCreate />
      },
      {
        path: ":id",
        element: <ProductDetail />
      },
      {
        path: ":id/edit",
        element: <ProductEdit />
      }
    ]
  }
]);

export default router;
