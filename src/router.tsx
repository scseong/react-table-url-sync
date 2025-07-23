import { createBrowserRouter } from "react-router-dom";
import { Home, MovieList, MovieDetail, SearchResult, NotFound } from "@/pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/movies",
    element: <MovieList />
  },
  {
    path: "/movies/:id",
    element: <MovieDetail />
  },
  {
    path: "/search",
    element: <SearchResult />
  },
  {
    path: "*",
    element: <NotFound />
  }
]);

export default router;
