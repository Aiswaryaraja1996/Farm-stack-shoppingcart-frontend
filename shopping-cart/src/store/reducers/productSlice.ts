import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import request from "../../services/httpMethods";

export const getAllProducts = createAsyncThunk("getProducts", async () => {
  const response = await request.get(`products/`);
  return response.data;
});

const initialState = {
  products: [],
  isLoading: true,
};

const ProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      });
  },
});

export const products = (state: any) => state.products.products;
export const isLoading = (state: any) => state.products.isLoading;

export default ProductSlice.reducer;
