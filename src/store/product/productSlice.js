import { createSlice } from "@reduxjs/toolkit";
import { getProductList } from "./productAction";

const initialState = {
  menuListResponse: null,
  menuListResponseLoading: false,
  menuListResponseError: undefined,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductList.pending, (state) => {
      state.menuListResponse = null;
      state.menuListResponseLoading = true;
      state.menuListResponseError = undefined;
    });
    builder.addCase(getProductList.fulfilled, (state, action) => {
      state.menuListResponse = action.payload;
      state.menuListResponseError = undefined;
      state.menuListResponseLoading = false;
    });
    builder.addCase(getProductList.rejected, (state, action) => {
      state.menuListResponseError = action.payload;
      state.menuListResponseLoading = false;
    });
  },
});

export default productSlice.reducer;