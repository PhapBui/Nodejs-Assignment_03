import { createSelector, createSlice } from "@reduxjs/toolkit";

//check a product in your shopping cart.
const checkProductInCart = (productList, action) => {
  if (!productList) return;
  return productList.find((p) => p._id === action.payload._id);
};
// get index of product in product list
const indexProduct = (productList, action) => {
  if (!productList) return;
  return productList.findIndex((obj) => obj._id === action.payload._id);
};

// Initial cart state
const initState = { listItem: [], subTotal: 0 };

export const cartSlice = createSlice({
  name: "cart",
  initialState: initState,
  reducers: {
    // load current user cart
    fetchCurrentUserCart(state, action) {
      state.listItem = action.payload;
    },

    // addToCart
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
    },

    // update item add to cart
    updateItemQty: (state, action) => {
      console.log(state.listItem);
      const objIndex = indexProduct(state.listItem, action);
      state.listItem[objIndex].quantity = +action.payload.quantity;
    },
    // remove Item
    removeProductInCart: (state, action) => {
      state.listItem.splice(action.payload, 1);
    },
    // remove all items in cart
    emptyCart: (state) => {
      state.listItem = [];
      console.log("Done!!!!");
    },
    // total bill
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
});

// Action creators are generated for each case reducer function
export const cartActions = cartSlice.actions;

// Selector
export const selectCartItems = (state) => state.cart.listItem;
export const selectCartSubTotal = (state) => state.cart.subTotal;

export const selectCartToSave = createSelector(selectCartItems, (itemList) =>
  itemList?.map((item) => ({ productId: item._id, quantity: item.quantity }))
);

export const selectCountItemsInCart = createSelector(
  selectCartItems,
  (itemList) => itemList?.reduce((a, b) => a + b.quantity, 0)
);

const cartReducer = cartSlice.reducer;

export default cartReducer;
