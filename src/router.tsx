import { createBrowserRouter } from "react-router-dom";
import {
  Categories,
  CategoryProducts,
  ProductCreate,
  ProductDetail,
  ProductEdit,
  ProductSearch,
  ProductsList
} from "@/pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductsList />
  },
  {
    path: "/products",
    element: <ProductsList />
  },
  {
    path: "/products/search",
    element: <ProductSearch />
  },
  {
    path: "/products/categories",
    element: <Categories />
  },
  {
    path: "/products/category/:category",
    element: <CategoryProducts />
  },
  {
    path: "/products/new",
    element: <ProductCreate />
  },
  {
    path: "/products/:id/edit",
    element: <ProductEdit />
  },
  {
    path: "/products/:id",
    element: <ProductDetail />
  }
]);

export default router;
