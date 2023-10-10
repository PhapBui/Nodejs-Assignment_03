import { createSlice } from "@reduxjs/toolkit";

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

      const productClicked = productList.find(
        (product) => product._id === action.payload
      );
      state.product = productClicked;
    },

    fetchProductById(state, action) {
      state.product = action.payload;
    },
    fetchRelatedProduct(state, action) {
      state.relateList = action.payload;
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
