const { createSlice } = require("@reduxjs/toolkit");

const initOrderState = {
  orderList: [],
  order: {},
};

const orderSlice = createSlice({
  name: "order",
  initialState: initOrderState,
  reducers: {
    getAllOrder(state, action) {
      state.orderList = action.payload;
    },
    getOrderById(state, action) {
      state.order = state.orderList.find(
        (order) => order._id === action.payload
      );
    },
  },
});

export const orderActions = orderSlice.actions;

export default orderSlice.reducer;
