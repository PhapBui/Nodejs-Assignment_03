import axiosAdmin from "./axiosAdmin";

export const productApi = {
  getAllHotel() {
    const url = `/product`;
    return axiosAdmin.get(url);
  },
};
