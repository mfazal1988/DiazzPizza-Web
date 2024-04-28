import { createAsyncThunk } from "@reduxjs/toolkit";
import { Authenticate, GetLoggedUserAPI, LogoutUserAPI, RegisterCustomerAPI } from "../../service/apiMethods";

export const authenticate = createAsyncThunk(
    "auth/authenticate",
    async (request ,{ rejectWithValue, getState }) => {
      try {
        const res = await Authenticate(request);
        return res.data;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );

  export const getLoggedUser = createAsyncThunk(
    "auth/getloggeduser",
    async (token ,{ rejectWithValue, getState }) => {
      try {
        const res = await GetLoggedUserAPI(token);
        return res.data;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );

  export const logout = createAsyncThunk(
    "auth/logout",
    async (_,{ rejectWithValue, getState }) => {
      try {
        //const res = await LogoutUserAPI();
        return null;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );

  export const createCustomerAccount = createAsyncThunk(
    "auth/createCustomerAccount",
    async (request, { rejectWithValue, getState }) =>{
      try {
        const res = await RegisterCustomerAPI(request);
        return res.data;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  )
