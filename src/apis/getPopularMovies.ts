import axiosWithToken from "./axiosInstance";
import mockPopularMovies from "../../public/mock/popular.json";
import type { Movie } from "@/types/movies";

export default async function getPopularMovies(): Promise<Movie[]> {
  if (import.meta.env.MODE === "development") {
    return Promise.resolve(mockPopularMovies.results as Movie[]);
  }

  try {
    const response = await axiosWithToken.get("/movie/popular");
    return response.data.results;
  } catch (error) {
    console.error("get popular movies error", error);
    throw error;
  }
}
