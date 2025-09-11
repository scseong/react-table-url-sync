import axiosWithToken from "./axiosInstance";
import mockMovieDetail from "../../public/mock/movie-detail.json";
import type { MovieDetail } from "@/types/movies";

export default async function getMovieDetail(id: string): Promise<MovieDetail> {
  if (import.meta.env.MODE === "development") {
    return Promise.resolve(mockMovieDetail as MovieDetail);
  }

  try {
    const response = await axiosWithToken.get(`/movie/${id}`);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("getMovieDetail error", error);
    throw error;
  }
}
