import clientAxios from "./axios.js";

const cartApi = {
  getCart() {
    const url = `/cart`;
    return clientAxios.get(url);
  },
  postCart(cart) {
    const url = `/cart`;
    return clientAxios.post(url, { cart });
  },
  emptyCart() {
    const url = `/cart`;
    return clientAxios.delete(url);
  },
};

export default cartApi;
