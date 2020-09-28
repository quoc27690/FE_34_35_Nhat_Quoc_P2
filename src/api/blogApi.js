import axiosClient from "./axiosClient";

const blogApi = {
  getBlog: () => {
    const url = "/blogs";
    return axiosClient.get(url);
  },
};

export default blogApi;