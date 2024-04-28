import { createAsyncThunk } from "@reduxjs/toolkit";
import { SaveCategoryAPI } from "../../service/apiMethods";

export const saveCategory = createAsyncThunk(
    "category/saveCategory",
    async (request,{ rejectWithValue, getState }) => {
      try {
        const res = await SaveCategoryAPI(request);
        return res.data;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );