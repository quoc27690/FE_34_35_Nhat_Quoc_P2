import axiosClient from "./axiosClient";

const ticketsApi = {
  getTickets: () => {
    const url = "/tickets";
    return axiosClient.get(url);
  },
};

export default ticketsApi;
