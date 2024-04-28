import { createAsyncThunk } from "@reduxjs/toolkit";
import { GetProductListAPI } from "../../service/apiMethods";

export const getProductList = createAsyncThunk(
    "product/getProductList",
    async (request,{ rejectWithValue, getState }) => {
      try {
        const res = await GetProductListAPI(request.name, request.page, request.pagesize);
        return res.data;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );