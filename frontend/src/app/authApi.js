import clientAxios from "./axios.js";

const authApi = {
  login(user) {
    const url = `/login`;
    return clientAxios.post(url, user);
  },
  signup(user) {
    const url = `/signup`;
    return clientAxios.post(url, user);
  },
};

export default authApi;
