import axiosClient from "./axiosClient";

const moviesApi = {
  getMovies: () => {
    const url = "/movies";
    return axiosClient.get(url);
  },
};

export default moviesApi;
