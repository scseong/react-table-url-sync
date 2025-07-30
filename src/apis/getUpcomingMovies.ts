import axiosWithToken from "./axiosInstance";
import mockUpcomingMovies from "../../public/mock/upcoming.json";
import type { Movie } from "@/types/movies";

export default async function getUpcomingMovies(): Promise<Movie[]> {
  if (import.meta.env.MODE === "development") {
    return Promise.resolve(mockUpcomingMovies.results as Movie[]);
  }

  try {
    const response = await axiosWithToken.get("/movie/upcoming");
    return response.data.results;
  } catch (error) {
    console.error("get upcoming movies error", error);
    throw error;
  }
}
