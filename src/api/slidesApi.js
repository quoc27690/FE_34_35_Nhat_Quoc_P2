import axiosClient from "./axiosClient";

const slidesApi = {
  getSlides: () => {
    const url = "/slides";
    return axiosClient.get(url);
  },
};

export default slidesApi;
