import axiosAdmin from "./axiosAdmin";

export const authApi = {
  login: (user) => {
    const url = "/login";
    return axiosAdmin.post(url, user);
  },
  getAllUser() {
    const url = "/user";
    return axiosAdmin.get(url);
  },
};
