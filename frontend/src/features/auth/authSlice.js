import { createSlice } from "@reduxjs/toolkit";
import { getFromStorage, saveToStorage } from "../../util/localStorage.js";

// Get userList, login status, current user from localstorage
const isLoggedIn = getFromStorage("isLoggedIn", false);
const currentUser = getFromStorage("currentUser", {});
const token = getFromStorage("token", false);

const initialState = {
  token: token,
  isLoggedIn: isLoggedIn,
  currentUser: currentUser,
  error: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    // Add new user and save to localstorage
    registerNewUser: (state, action) => {
      const newUserArr = state.userArr;
      newUserArr.push(action.payload);
      state.userArr = [...newUserArr];
      saveToStorage("userArr", newUserArr);
    },
    // Save login status and current user to localstorage when login
    login: (state, action) => {
      state.currentUser = action.payload.user;
      state.isLoggedIn = true;
      state.token = action.payload.token;

      saveToStorage("currentUser", state.currentUser);
      saveToStorage("isLoggedIn", state.isLoggedIn);
      saveToStorage("token", state.token);
      const remainingMilliseconds = 24 * 60 * 60 * 1000;
      const expiryDate = new Date(new Date().getTime() + remainingMilliseconds);
      saveToStorage("timeExpired", expiryDate);
    },
    // Save login status and current user to localstorage when logout
    logout: (state) => {
      state.isLoggedIn = false;
      state.currentUser = {};
      state.token = null;

      saveToStorage("currentUser", state.currentUser);
      saveToStorage("isLoggedIn", state.isLoggedIn);
      saveToStorage("token", state.token);
      saveToStorage("timeExpired", 0);
    },
  },
});

export const authActions = authSlice.actions;

// Create selector
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectCurrentUser = (state) => state.auth.currentUser;
export const selectUserList = (state) => state.auth.userArr;

const authReducer = authSlice.reducer;

export default authReducer;
