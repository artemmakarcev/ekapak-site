import { createSlice } from "@reduxjs/toolkit";

type ProductsState = {
  products: [];
  currentPage: number;
  productsPerPage: number;
  totalProducts: number;
  selectedCategory: null | string;
};

const initialState: ProductsState = {
  products: [],
  currentPage: 1,
  productsPerPage: 16,
  totalProducts: 0,
  selectedCategory: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload.data;
      state.totalProducts = action.payload.meta.totalProducts;
      state.currentPage = action.payload.meta.currentPage;
    },
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const { setProducts, setCategory } = productSlice.actions;
export default productSlice.reducer;
