import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/product/productSlice.js";
import cartReducer from "../features/cart/cartSlice.js";
import authReducer from "../features/auth/loginSlice.js";

export default configureStore({
  reducer: { products: productReducer, cart: cartReducer, auth: authReducer },
});
