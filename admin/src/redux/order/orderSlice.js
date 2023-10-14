import { createSlice } from "@reduxjs/toolkit";

const initOrderState = {
  orderList: [],
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

    // updateOrder
  },
});

export const orderActions = orderSlice.actions;

export const selectOrderList = (state) => state.order.orderList;

const orderReducer = orderSlice.reducer;

export default orderReducer;
