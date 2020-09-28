import axiosClient from "./axiosClient";

const authApi = {
  postUserRegister: (newUser) => {
    const url = `/register`;
    return axiosClient.post(url, newUser);
  },

  postUserLogin: (newUser) => {
    const url = `/login`;
    return axiosClient.post(url, newUser);
  },
};

export default authApi;
