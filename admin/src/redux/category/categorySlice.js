import { createSelector, createSlice } from "@reduxjs/toolkit";

const initCategory = {
  categoryList: [],
  loading: false,
};

const categorySlice = createSlice({
  initialState: initCategory,
  name: "category",
  reducers: {
    fetchAllCategoryStart(state) {
      state.loading = true;
    },
    fetchAllCategorySuccessfully(state, action) {
      state.loading = false;
      state.categoryList = action.payload;
    },
    fetchAllCategoryFailed(state) {
      state.loading = false;
    },
  },
});

export const categoryActions = categorySlice.actions;

export const selectCategoryList = (state) => state.category.categoryList;

export const categoryOption = createSelector(
  selectCategoryList,
  (categoryList) =>
    categoryList.map((category) => ({
      label: category.name,
      value: category.name,
    }))
);

const categoryReducer = categorySlice.reducer;

export default categoryReducer;
