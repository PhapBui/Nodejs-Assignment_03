import products from "./axios.js";

const productApi = {
  getAll() {
    return products.get();
  },
};

export default productApi;
