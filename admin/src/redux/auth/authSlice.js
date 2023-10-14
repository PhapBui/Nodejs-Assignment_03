import { createSelector, createSlice } from "@reduxjs/toolkit";
import { getFromStorage, saveToStorage } from "../../utils/localStorage";

// Get userList, login status, current user from localstorage
const isLoggedIn = getFromStorage("isLoggedIn", false);
const currentUser = getFromStorage("currentUser", {});
const token = getFromStorage("token", false);

const initAuth = {
  userList: [],
  user: currentUser,
  isLoggin: isLoggedIn,
  role: "",
  statistic: { countUser: 0, countNewOrder: [{}] },
  token,
  loading: false,
};

const authSlice = createSlice({
  initialState: initAuth,
  name: "auth",
  reducers: {
    // login
    loginStart: (state) => {
      state.loading = true;
    },
    loginSuccessfully: (state, action) => {
      state.isLoggin = true;
      state.user = action.payload.user;
      state.role = action.payload.user.role;
      state.token = action.payload.token;
      state.loading = false;

      saveToStorage("currentUser", state.user);
      saveToStorage("isLoggedIn", state.isLoggin);
      saveToStorage("token", state.token);
      const remainingMilliseconds = 24 * 60 * 60 * 1000;
      const expiryDate = new Date(new Date().getTime() + remainingMilliseconds);
      saveToStorage("timeExpired", expiryDate);
    },
    loginFailed: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },

    // fetch all users
    fetchAllUserStart: (state) => {
      state.loading = true;
    },
    fetchAllUserSuccess: (state, action) => {
      state.loading = false;
      state.userList = action.payload.result;
      state.message = action.payload.message;
    },
    fetchAllUserFailed: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    // fetch statistic
    fetchStatisticStart(state) {
      state.loading = true;
    },
    fetchStatisticSuccess(state, action) {
      state.loading = false;
      state.statistic = action.payload;
    },
    fetchStatisticFailed(state) {
      state.loading = false;
    },

    // logout
    logout(state) {
      state.isLoggin = false;
      state.user = null;
      state.token = null;

      saveToStorage("currentUser", state.user);
      saveToStorage("isLoggedIn", state.isLoggin);
      saveToStorage("token", state.token);
      saveToStorage("timeExpired", 0);
    },
  },
});

export const authActions = authSlice.actions;

// custome selector
export const selectUserList = (state) => state.auth.userList;
export const selectIsLoggedIn = (state) => state.auth.isLoggin;

export const numberOfUser = createSelector(
  selectUserList,
  (userList) => userList.length
);

const authReducer = authSlice.reducer;

export default authReducer;
