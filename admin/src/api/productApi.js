import axiosAdmin from "./axiosAdmin";

export const productApi = {
  getAllProduct() {
    const url = `/product`;
    return axiosAdmin.get(url);
  },
  getProductById(productId) {
    const url = `/product/${productId}`;
    return axiosAdmin.get(url);
  },
  createNewProduct(product) {
    const url = `/product`;
    return axiosAdmin.post(url, product);
  },
  updateProduct(data) {
    const { productId, product } = data;
    const url = `/product/${productId}`;
    return axiosAdmin.put(url, product);
  },
  deleteProductById(productId) {
    const url = `/product/${productId}`;
    return axiosAdmin.delete(url);
  },
};
