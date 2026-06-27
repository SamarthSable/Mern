import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProduct = createAsyncThunk(
  "Product/fetchProducts",
  async () => {
    const data = await fetch("https://dummyjson.com/products").then((res) =>
      res.json(),
    );

    return data.products;
  },
);

const initialState = {
  products: [],
  loading: false,
  error: null,
};
const productSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });

    builder.addCase(fetchProduct.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default productSlice.reducer;
