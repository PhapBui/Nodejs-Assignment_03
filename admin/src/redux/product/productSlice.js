import { createSelector, createSlice } from "@reduxjs/toolkit";

const initProductState = {
  productList: [],
  loading: false,
  message: "",
  product: {
    name: "",
    price: 0,
    quantity: 0,
    category: "iPhone",
    short_desc: "",
    long_desc: "",
    images: [],
  },
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
      state.productList = action.payload;
    },
    fetchAllProductFailed(state, action) {
      state.loading = false;
      state.message = action.payload;
    },
    // fetch product by id
    fetchProductByIdStart(state) {
      state.loading = true;
    },
    fetchProductByIdSuccess(state, action) {
      state.loading = false;
      state.product = action.payload;
    },
    fetchProductByIdFailed(state) {
      state.loading = false;
    },

    // create new product
    createNewProductStart(state) {
      state.loading = true;
    },
    createNewProductSuccess(state) {
      state.loading = false;
      state.product = {
        name: "",
        price: 0,
        quantity: 0,
        category: "iPhone",
        short_desc: "",
        long_desc: "",
        images: [],
      };
    },
    createNewProductFailed(state, action) {
      state.loading = false;
      state.message = action.payload;
    },
    // update product
    updateProductStart(state) {
      state.loading = true;
    },
    updateProductSuccess(state) {
      state.loading = false;
      state.product = {
        name: "",
        price: 0,
        quantity: 0,
        category: "iPhone",
        short_desc: "",
        long_desc: "",
        images: [],
      };
    },
    updateProductFailed(state) {
      state.loading = false;
    },

    // remove product by id
    removeProductByIdStart(state) {
      state.loading = true;
    },
    removeProductByIdSuccess(state, action) {
      state.loading = false;
      state.productList = state.productList.filter(
        (product) => product._id !== action.payload
      );
    },
    removeProductByIdFailed(state) {
      state.loading = false;
    },
  },
});

export const productActions = productSlice.actions;

export const selectProductList = (state) => state.product.productList;
export const selectLoading = (state) => state.product.loading;

export const productOption = createSelector(selectProductList, (productList) =>
  productList.map((product) => ({
    label: product.name,
    value: product._id,
  }))
);

const productReducer = productSlice.reducer;

export default productReducer;
