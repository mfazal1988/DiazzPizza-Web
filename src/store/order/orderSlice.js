import { createSlice } from "@reduxjs/toolkit";
import { SaveOrder, getOrderList, getCustomerOrderList, UpdateOrderStatus, UpdateOrderDeliveryPerson } from "./orderAction";

const initialState = {
  orderResponse: null,
  orderResponseLoading: false,
  orderResponseError: undefined,

  orderListResponse: null,
  orderListResponseLoading: false,
  orderListResponseError: undefined,

  orderStatusResponse: null,
  orderStatusResponseLoading: false,
  orderStatusResponseError: undefined,
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(SaveOrder.pending, (state) => {
      state.orderResponse = null;
      state.orderResponseLoading = true;
      state.orderResponseError = undefined;
    });
    builder.addCase(SaveOrder.fulfilled, (state, action) => {
      state.orderResponse = action.payload;
      state.orderResponseLoading = false;
      state.orderResponseError = undefined;
    });
    builder.addCase(SaveOrder.rejected, (state, action) => {
      state.orderResponse = null;
      state.orderResponseLoading = false;
      state.orderResponseError = action.payload;
    });


    builder.addCase(getOrderList.pending, (state) => {
      state.orderListResponse = null;
      state.orderListResponseLoading = true;
      state.orderListResponseError = undefined;
    });
    builder.addCase(getOrderList.fulfilled, (state, action) => {
      state.orderListResponse = action.payload;
      state.orderListResponseLoading = false;
      state.orderListResponseError = undefined;
    });
    builder.addCase(getOrderList.rejected, (state, action) => {
      state.orderListResponse = null;
      state.orderListResponseLoading = false;
      state.orderListResponseError = action.payload;
    });

    
    builder.addCase(getCustomerOrderList.pending, (state) => {
      state.orderListResponse = null;
      state.orderListResponseLoading = true;
      state.orderListResponseError = undefined;
    });
    builder.addCase(getCustomerOrderList.fulfilled, (state, action) => {
      state.orderListResponse = action.payload;
      state.orderListResponseLoading = false;
      state.orderListResponseError = undefined;
    });
    builder.addCase(getCustomerOrderList.rejected, (state, action) => {
      state.orderListResponse = null;
      state.orderListResponseLoading = false;
      state.orderListResponseError = action.payload;
    });


    
    builder.addCase(UpdateOrderStatus.pending, (state) => {
      state.orderStatusResponse = null;
      state.orderStatusResponseLoading = true;
      state.orderStatusResponseError = undefined;
    });
    builder.addCase(UpdateOrderStatus.fulfilled, (state, action) => {
      state.orderStatusResponse = action.payload;
      state.orderStatusResponseLoading = false;
      state.orderStatusResponseError = undefined;
    });
    builder.addCase(UpdateOrderStatus.rejected, (state, action) => {
      state.orderStatusResponse = null;
      state.orderStatusResponseLoading = false;
      state.orderStatusResponseError = action.payload;
    });

    
    builder.addCase(UpdateOrderDeliveryPerson.pending, (state) => {
      state.orderStatusResponse = null;
      state.orderStatusResponseLoading = true;
      state.orderStatusResponseError = undefined;
    });
    builder.addCase(UpdateOrderDeliveryPerson.fulfilled, (state, action) => {
      state.orderStatusResponse = action.payload;
      state.orderStatusResponseLoading = false;
      state.orderStatusResponseError = undefined;
    });
    builder.addCase(UpdateOrderDeliveryPerson.rejected, (state, action) => {
      state.orderStatusResponse = null;
      state.orderStatusResponseLoading = false;
      state.orderStatusResponseError = action.payload;
    });
  },
});

export default orderSlice.reducer;
