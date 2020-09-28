import axiosClient from "./axiosClient";

const comboApi = {
  getCombo: () => {
    const url = "/combo";
    return axiosClient.get(url);
  },
};

export default comboApi;