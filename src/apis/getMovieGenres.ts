import axiosWithToken from "./axiosInstance";
import type { MovieGenre } from "@/types/movies";

export default async function getMovieGenres(): Promise<MovieGenre[]> {
  try {
    const response = await axiosWithToken.get("/genre/movie/list");
    return response.data.genres;
  } catch (error) {
    console.error("get genres error", error);
    throw error;
  }
}
