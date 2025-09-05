import { createBrowserRouter } from "react-router-dom";
import { Home, MovieList, MovieDetail, MovieReviewList, SearchResult, NotFound } from "@/pages";
import HomeLayout from "@/components/Layout/HomeLayout";

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
    path: "/movies/:id/reviews",
    element: <MovieReviewList />
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
