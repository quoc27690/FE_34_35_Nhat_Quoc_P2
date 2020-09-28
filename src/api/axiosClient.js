import axios from "axios";

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

axiosClient.interceptors.response.use(
  (response) => {
    // if (response && response.data) {
    //   if (response.data.accessToken) {
    //     localStorage.setItem("token", response.data.accessToken);
    //   }

    //   return response.data;
    // }
    if (response.data.accessToken) {
      localStorage.setItem("token", response.data.accessToken);
    }
    return response.data;
  },
  (error) => {
    // Case 1: Networking
    if (error.response) {
      return error.response.data;
    }
    // Case 2: Network Error
    else {
      throw error;
    }
  }
);
export default axiosClient;
