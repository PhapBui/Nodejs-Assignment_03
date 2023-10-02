import { createSlice } from "@reduxjs/toolkit";
import { getFromStorage, saveToStorage } from "../../util/localStorage.js";

// Get userList, login status, current user from localstorage
const userArray = getFromStorage("userArr", []);
const isLoggedIn = getFromStorage("isLoggedIn", false);
const currentUser = getFromStorage("currentUser", false);

const initialState = {
  userArr: userArray,

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
      state.currentUser = action.payload;
      state.isLoggedIn = true;

      saveToStorage("isLoggedIn", state.isLoggedIn);
      saveToStorage("currentUser", state.currentUser);
    },
    // Save login status and current user to localstorage when logout
    logout: (state) => {
      state.isLoggedIn = false;
      state.currentUser = {};

      saveToStorage("isLoggedIn", state.isLoggedIn);
      saveToStorage("currentUser", state.currentUser);
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
