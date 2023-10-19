import { createSlice } from "@reduxjs/toolkit";

const initOrderState = {
  orderList: [],
  order: {},
  loading: false,
};

const orderSlice = createSlice({
  initialState: initOrderState,
  name: "order",
  reducers: {
    // Fetch all cities
    fetchAllOrderStart(state) {
      state.loading = true;
    },
    fetchAllOrderSuccessfully(state, action) {
      state.loading = false;
      state.orderList = action.payload;
    },
    fetchAllOrderFailed(state) {
      state.loading = false;
    },
    // get order by id
    getOrderById(state) {
      state.loading = true;
    },
    getOrderByIdSuccess(state, action) {
      state.loading = false;
      state.order = action.payload;
    },
    getOrderByIdFailed(state) {
      state.loading = false;
    },
  },
});

export const orderActions = orderSlice.actions;

export const selectOrderList = (state) => state.order.orderList;
export const selectOrder = (state) => state.order.order;

const orderReducer = orderSlice.reducer;

export default orderReducer;
