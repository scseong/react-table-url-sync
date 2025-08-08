import axiosWithToken from "./axiosInstance";

export default async function getSearchResults(options: object) {
  try {
    const response = await axiosWithToken.get("/search/movie", { params: options });
    return response.data.results;
  } catch (error) {
    console.error("search error", error);
    throw error;
  }
}
