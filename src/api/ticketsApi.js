import axiosClient from "./axiosClient";

const ticketsApi = {
  getTickets: () => {
    const url = "/tickets";
    return axiosClient.get(url);
  },

  deleteTicket: (ticketId) => {
    const url = `/tickets/${ticketId}`;
    return axiosClient.delete(url);
  },
};

export default ticketsApi;
