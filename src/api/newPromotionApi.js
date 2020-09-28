import axiosClient from "./axiosClient";

const newPromotionApi = {
  getNewPromotion: () => {
    const url = "/promotion";
    return axiosClient.get(url);
  },
};

export default newPromotionApi;