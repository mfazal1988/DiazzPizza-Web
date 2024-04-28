import { createSlice } from "@reduxjs/toolkit";
import { authenticate, logout, getLoggedUser, createCustomerAccount } from "./authAction";

const initialState = {
  authResponse: null,
  authResponseLoading: false,
  authResponseError: undefined,

  createCustomerResponse: null,
  createCustomerLoading: false,
  createCustomerError: undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(authenticate.pending, (state) => {
      state.authResponseLoading = true;
      state.authResponseError = undefined;
    });
    builder.addCase(authenticate.fulfilled, (state, action) => {
      state.authResponse = action.payload;
      state.authResponseError = undefined;
      state.authResponseLoading = false;
    });
    builder.addCase(authenticate.rejected, (state, action) => {
      state.authResponseError = action.payload;
      state.authResponseLoading = false;
    });

    builder.addCase(logout.pending, (state, action) => {
      state.authResponseLoading = true;
      state.authResponseError = undefined;
      state.authResponse = null;
    });
    builder.addCase(logout.fulfilled, (state, action) => {
      state.authResponse = null;
      state.authResponseLoading = false;
      state.authResponseError = undefined;
    });
    builder.addCase(logout.rejected, (state, action) => {
      state.authResponseLoading = false;
      state.authResponseError = undefined;
    });

    // builder.addCase(getLoggedUser.pending, (state, action) => {
    //   state.authResponseLoading = true;
    //   state.authResponseError = undefined;
    // });
    // builder.addCase(getLoggedUser.fulfilled, (state, action) => {
    //   const userResponseData = {
    //       id: action.payload.id,
    //       name: action.payload.name,
    //       email: action.payload.email,
    //       role: action.payload.role,
    //       level: action.payload.level,
    //       profile: action.payload.profile,
    //       access_token: action.payload.access_token,
    //       branch_id: action.payload.branch_id
    //   };

    //   state.authResponse = userResponseData;
    //   state.authResponseLoading = false;
    //   state.authResponseError = undefined;
    // });
    // builder.addCase(getLoggedUser.rejected, (state, action) => {
    //   state.authResponseLoading = false;
    //   state.authResponseError = undefined;
    // });

    builder.addCase(createCustomerAccount.pending, (state, action) => {
      state.createCustomerLoading = true;
      state.createCustomerResponse = null;
      state.createCustomerError = undefined;
    });
    builder.addCase(createCustomerAccount.fulfilled, (state, action) => {
      state.createCustomerResponse = action.payload;
      state.createCustomerError = undefined;
      state.createCustomerLoading = false;
    });
    builder.addCase(createCustomerAccount.rejected, (state, action) => {
      state.createCustomerError = action.payload;
      state.createCustomerLoading = false;
    })
    
  },
});

export default authSlice.reducer;
