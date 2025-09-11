import axiosWithToken from "./axiosInstance";
import mockReviews from "../../public/mock/movie-reviews.json";
import type { MovieReview } from "@/types/movies";

export default async function getMovieReviews(movieId?: string): Promise<MovieReview[]> {
  if (!movieId) return [];

  if (import.meta.env.MODE === "development") {
    return Promise.resolve(mockReviews as MovieReview[]);
  }

  try {
    const response = await axiosWithToken.get(`/movie/${movieId}/reviews`);
    return response.data.result;
  } catch (error) {
    console.error("getMovieReviews error", error);
    throw error;
  }
}
