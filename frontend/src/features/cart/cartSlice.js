import { createSlice } from "@reduxjs/toolkit";
import { getFromStorage, saveToStorage } from "../../util/localStorage.js";

//check a product in your shopping cart.
const checkProductInCart = (productList, action) => {
  if (!productList) return;
  return productList.find((p) => p._id.$oid === action.payload._id.$oid);
};
// get index of product in product list
const indexProduct = (productList, action) => {
  if (!productList) return;
  return productList.findIndex(
    (obj) => obj._id.$oid === action.payload._id.$oid
  );
};
const listCart = getFromStorage("listCart", []);
// Initial cart state
const initState = { listItem: listCart, subTotal: 0 };

export const cartSlice = createSlice({
  name: "cart",
  initialState: initState,
  reducers: {
    addToCart: (state, action) => {
      const productInCart = checkProductInCart(state.listItem, action);
      if (!productInCart) {
        state.listItem = [...state.listItem, action.payload];
      } else {
        const objIndex = indexProduct(state.listItem, action);
        if (objIndex === undefined) {
          state.listItem[objIndex].quantity = +action.payload.quantity;
        } else {
          state.listItem[objIndex].quantity += +action.payload.quantity;
        }
      }
      saveToStorage("listCart", state.listItem);
    },
    updateItemQty: (state, action) => {
      const objIndex = indexProduct(state.listItem, action);
      state.listItem[objIndex].quantity = +action.payload.quantity;
      saveToStorage("listCart", state.listItem);
    },
    removeProductInCart: (state, action) => {
      state.listItem.splice(action.payload, 1);
      saveToStorage("listCart", state.listItem);
    },
    emptyCart: (state) => {
      state.listItem = [];
      saveToStorage("listCart", []);
    },
    calculatorSubTotal: (state) => {
      const currentSubTotal = state.subTotal;
      const { listItem } = state;
      const price = listItem.reduce((a, b) => {
        a += +b.price;
        return a;
      }, currentSubTotal);
      state.subTotal = price;
    },
  },
  extraReducers: (builder) => {},
});

// Action creators are generated for each case reducer function
export const cartActions = cartSlice.actions;

// Selector
export const selectCartItems = (state) => state.cart.listItem;
export const selectCartSubTotal = (state) => state.cart.subTotal;

const cartReducer = cartSlice.reducer;

export default cartReducer;
