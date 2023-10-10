import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import productReducer from "../redux/product/productSlice";
import authReducer from "../redux/auth/authSlice";
// ...

const rootReducer = combineReducers({
  product: productReducer,
  auth: authReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredPaths: [
          "transaction.resTransaction.dateStart",
          "transaction.resTransaction.dateEnd",
        ],
      },
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
