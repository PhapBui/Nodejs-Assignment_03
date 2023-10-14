import clientAxios from "./axios.js";

const orderApi = {
  getAllCurrentOrder() {
    const url = `/order`;
    return clientAxios.get(url);
  },
  completeOrder(userInfo) {
    const url = `/order`;
    return clientAxios.post(url, userInfo);
  },
};

export default orderApi;
