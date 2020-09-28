import axios from "axios";

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      if (response.data.accessToken) {
        localStorage.setItem("token", response.data.accessToken);
      }
      return response.data;
    }
    return response;
  },
  (error) => {
    return error.response.data;
  }
);
export default axiosClient;
