import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/product/productSlice.js";
import cartReducer from "../features/cart/cartSlice.js";
import authReducer from "../features/auth/authSlice.js";
import orderReducer from "../features/order/orderSlice.js";
import chatReducer from "../features/chat/chatSlice.js";

export default configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    auth: authReducer,
    userOrder: orderReducer,
    chat: chatReducer,
  },
});
