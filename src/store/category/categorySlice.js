import { createSlice } from "@reduxjs/toolkit";
import { saveCategory } from "./categoryAction";

const initialState = {
  catResponse: null,
  catResponseLoading: false,
  catResponseError: undefined,
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(saveCategory.pending, (state) => {
      state.catResponseLoading = true;
      state.catResponseError = undefined;
    });
    builder.addCase(saveCategory.fulfilled, (state, action) => {
      state.catResponse = action.payload;
      state.catResponseError = undefined;
      state.catResponseLoading = false;
    });
    builder.addCase(saveCategory.rejected, (state, action) => {
      state.catResponseError = action.payload;
      state.catResponseLoading = false;
    });
  },
});

export default categorySlice.reducer;