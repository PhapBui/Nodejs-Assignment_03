import { createSelector, createSlice } from "@reduxjs/toolkit";
import { getItemFromLocalStorage } from "../../utils/localStorage";

const token = getItemFromLocalStorage("token");

const initAuth = {
  userList: [],
  user: {
    email: "",
    fullName: "",
    password: "",
  },
  isLoggin: false,
  loading: false,
  message: "",
  isAdmin: false,
  token,
};

const authSlice = createSlice({
  initialState: initAuth,
  name: "auth",
  reducers: {
    loginStart: (state) => {
      state.loading = true;
    },
    loginSuccessfully: (state, action) => {
      state.loading = false;
      state.isLoggin = true;
      state.user = action.payload;
      state.isAdmin = action.payload.isAdmin || false;
      state.message = "Login succesfully!";
    },
    loginFailed: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },

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
    logout(state) {
      state.loading = true;
    },
    logoutSuccess(state) {
      state.loading = false;
      state.isLoggin = false;
      state.user = {
        email: "",
        password: "",
      };
    },
  },
});

export const authActions = authSlice.actions;

// custome selector
export const selectUserList = (state) => state.auth.userList;
export const numberOfUser = createSelector(
  selectUserList,
  (userList) => userList.length
);

const authReducer = authSlice.reducer;

export default authReducer;
