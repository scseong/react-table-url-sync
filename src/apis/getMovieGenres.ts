import axiosWithToken from "./axiosInstance";
import mockGenres from "../../public/mock/genres.json";
import type { MovieGenre } from "@/types/movies";

export default async function getMovieGenres(): Promise<MovieGenre[]> {
  if (import.meta.env.MODE === "development") {
    return Promise.resolve(mockGenres as MovieGenre[]);
  }

  try {
    const response = await axiosWithToken.get("/genre/movie/list");
    return response.data.genres;
  } catch (error) {
    console.error("get genres error", error);
    throw error;
  }
}
