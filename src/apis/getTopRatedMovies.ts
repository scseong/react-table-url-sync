import axiosWithToken from "./axiosInstance";
import mockTopRatedMovies from "../../public/mock/top-rated.json";
import type { Movie } from "@/types/movies";

export default async function getTopRatedMovies(): Promise<Movie[]> {
  if (import.meta.env.MODE === "development") {
    return Promise.resolve(mockTopRatedMovies.results as Movie[]);
  }

  try {
    const response = await axiosWithToken.get("/movie/top_rated");
    return response.data.results;
  } catch (error) {
    console.error("get popular movies error", error);
    throw error;
  }
}
