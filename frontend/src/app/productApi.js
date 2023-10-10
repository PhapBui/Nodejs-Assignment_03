import clientAxios from "./axios.js";

const productApi = {
  getAll() {
    const url = `/product`;
    return clientAxios.get(url);
  },
  getById(id) {
    const url = `/product/${id}`;
    return clientAxios.get(url);
  },
  getByCategory(cate) {
    const url = `product?cate=${cate}`;
    return clientAxios.get(url);
  },
};

export default productApi;
