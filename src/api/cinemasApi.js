import axiosClient from "./axiosClient";

const cinemasApi = {
  getCinemas: () => {
    const url = "/cinemas";
    return axiosClient.get(url);
  },
};

export default cinemasApi;