import axios from "axios";

const ACCESS_TOKEN = import.meta.env.VITE_TMDB_ACCESS_TOKEN;

export const axiosWithToken = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    "Content-Type": "application/json"
  }
});

axiosWithToken.interceptors.request.use(
  function (config) {
    if (ACCESS_TOKEN) {
      config.headers.Authorization = `Bearer ${ACCESS_TOKEN}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosWithToken.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    console.error("Response Interceptor Error:", error);
    return Promise.reject(error);
  }
);
