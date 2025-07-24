import { createBrowserRouter } from "react-router-dom";
import { Home, MovieList, MovieDetail, SearchResult, NotFound } from "@/pages";
import HomeLayout from "./components/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <HomeLayout>
        <Home />
      </HomeLayout>
    )
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
