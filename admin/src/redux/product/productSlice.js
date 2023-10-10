import { createSelector, createSlice } from "@reduxjs/toolkit";

const initProduct = {
  name: "",
  images: "",
  hotels: 0,
};

const initProductState = {
  productList: [],
  loading: false,
  message: "",
  responseProduct: initProduct,
};

const productSlice = createSlice({
  initialState: initProductState,
  name: "product",
  reducers: {
    // Fetch all cities
    fetchAllProductStart(state) {
      state.loading = true;
    },
    fetchAllProductSuccessfully(state, action) {
      state.loading = false;
      state.productList = action.payload.result;
      state.message = action.payload.message;
    },
    fetchAllProductFailed(state, action) {
      state.loading = false;
      state.message = action.payload;
    },

    // create new product
    createNewProductStart(state) {
      state.loading = true;
    },
    createNewProductSuccess(state) {
      state.loading = false;
    },
    createNewProductFailed(state, action) {
      state.loading = false;
      state.message = action.payload;
    },

    // remove product by id
    removeProductByIdStart(state) {
      state.loading = true;
    },
    removeProductByIdSuccess(state, action) {
      state.loading = false;
      state.productList = state.productList.filter(
        (product) => product._id !== action.payload.result._id
      );
      state.message = action.payload.message;
    },
    removeProductByIdFailed(state, action) {
      state.loading = false;
      state.message = action.payload;
    },
  },
});

export const productActions = productSlice.actions;

export const selectProductList = (state) => state.product.productList;

export const productOption = createSelector(selectProductList, (productList) =>
  productList.map((product) => ({
    label: product.name,
    value: product._id,
  }))
);

const productReducer = productSlice.reducer;

export default productReducer;
