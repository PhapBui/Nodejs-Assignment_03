import axiosAdmin from "./axiosAdmin";

export const categoryApi = {
  getAllCategory() {
    const url = `/category`;
    return axiosAdmin.get(url);
  },
  createNewCategory(image) {
    const url = `/category`;
    return axiosAdmin.post(url, image);
  },
};
