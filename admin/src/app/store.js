import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import productReducer from "../redux/product/productSlice";
import authReducer from "../redux/auth/authSlice";
import orderReducer from "../redux/order/orderSlice";
import categoryReducer from "../redux/category/categorySlice";
import chatReducer from "../redux/chat/chatSlice";
// ...

const rootReducer = combineReducers({
  product: productReducer,
  auth: authReducer,
  order: orderReducer,
  category: categoryReducer,
  chat: chatReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredPaths: [],
        ignoredActions: ["product/createNewProductStart"],
      },
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
