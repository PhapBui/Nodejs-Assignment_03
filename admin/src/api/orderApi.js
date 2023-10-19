import axiosAdmin from "./axiosAdmin.js";

const orderApi = {
  getAllOrder() {
    const url = `/order`;
    return axiosAdmin.get(url);
  },
  getOrderById(orderId) {
    const url = `/order/${orderId}`;
    return axiosAdmin.get(url);
  },
};

export default orderApi;
