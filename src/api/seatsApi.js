import axiosClient from "./axiosClient";

const seatsApi = {
  getSeats: () => {
    const url = "/seats";
    return axiosClient.get(url);
  },
};

export default seatsApi;
