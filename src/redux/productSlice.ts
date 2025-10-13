import { createSlice } from "@reduxjs/toolkit";

type ProductsState = {
  products: [];
  currentPage: number;
  selectedCategory: null | string;
};

const initialState: ProductsState = {
  products: [],
  currentPage: 1,
  selectedCategory: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload.data;
      state.currentPage = action.payload.meta.current_page;
    },
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
    incrementPage: (state) => {
      state.currentPage++;
    },
    decrementPage: (state) => {
      state.currentPage--;
    },
  },
});

export const { setProducts, setCategory, setPage, incrementPage, decrementPage } = productSlice.actions;
export default productSlice.reducer;
