import clientAxios from "./axios.js";

const orderApi = {
  getCart() {
    const url = `/cart`;
    return clientAxios.get(url);
  },
  completeOrder(userInfo) {
    const url = `/order`;
    return clientAxios.post(url, userInfo);
  },
};

export default orderApi;
