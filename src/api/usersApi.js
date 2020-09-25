import axiosClient from "./axiosClient";

const usersApi = {
  getUsers: () => {
    const url = "/users";
    return axiosClient.get(url);
  },
};

export default usersApi;
