import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productApi from "../../app/productApi.js";

export const fetchProductById = createAsyncThunk(
  "products/fetchProductList",
  async (productId, thunkAPI) => {
    const response = await productApi.getAll();

    const productClicked = response.filter(
      (product) => product._id.$oid === productId
    );
    if (productClicked.length > 0) return productClicked;
  }
);

export const fetchRelateList = createAsyncThunk(
  "products/fetchRelateList",
  async (category, thunkAPI) => {
    const response = await productApi.getAll();

    const relateList = response.filter(
      (product) => product.category === category
    );
    return relateList;
  }
);

const initState = {
  productList: [],
  product: {},
  isShowDetailPopup: false,

  filterProduct: [],

  getProductById: {},
  relateList: [],

  activeCategory: "",
};

export const productSlice = createSlice({
  name: "products",
  initialState: initState,
  reducers: {
    getAllProduct: (state, action) => {
      state.productList = action.payload;
    },
    getProductDetail: (state, action) => {
      const { productList } = state;

      const productClicked = productList.filter(
        (product) => product._id.$oid === action.payload
      );
      state.product = productClicked;
    },
    showProductDetailPopup: (state, action) => {
      state.isShowDetailPopup = true;
    },
    hideProductDetailPopup: (state, action) => {
      state.isShowDetailPopup = false;
    },

    getProductsByCategory: (state, action) => {
      state.activeCategory = action.payload;
      if (action.payload === "all") {
        state.filterProduct = state.productList;
        return;
      }
      const newProducts = state.productList;
      const filterProduct = newProducts.filter(
        (product) => product.category === action.payload
      );
      state.filterProduct = filterProduct;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductById.fulfilled, (state, action) => {
      if (action.payload) state.getProductById = action.payload[0];
    });
    builder.addCase(fetchRelateList.fulfilled, (state, action) => {
      state.relateList = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const productActions = productSlice.actions;

// Selector
export const fetchAllProduct = (state) => state.products.productList;
export const fetchDetailProduct = (state) => state.products.product;
export const isShowDetailPopup = (state) => state.products.isShowDetailPopup;

export const getProductsByCategory = (state) => state.products.filterProduct;
export const getActiveCategory = (state) => state.products.activeCategory;

export const getProductById = (state) => state.products.getProductById;

export const getRelateList = (state) => state.products.relateList;

const productReducer = productSlice.reducer;

export default productReducer;
