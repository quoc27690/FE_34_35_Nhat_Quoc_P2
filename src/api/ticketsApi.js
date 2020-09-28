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

  postTicket: (ticket) => {
    const url = `/tickets/`;
    return axiosClient.post(url, ticket);
  },
};

export default ticketsApi;
