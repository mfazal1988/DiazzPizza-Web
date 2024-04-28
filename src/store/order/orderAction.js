import { createAsyncThunk } from "@reduxjs/toolkit";
import { GetPagedListOrderAPI, SaveOrderAPI, GetOrderByCreatedUserIdAPI, UpdateOrderStatusAPI, UpdateOrderDeliveryPersonAPI } from "../../service/apiMethods";

export const SaveOrder = createAsyncThunk(
    'order/saveOrder',
    async (request, { rejectWithValue, getState })=>{
        try{
            const res = await SaveOrderAPI(request);
            return res.data;
        }catch(error) {
            return rejectWithValue(error);
        }
    }
)

export const getOrderList = createAsyncThunk(
    "order/getOrderList",
    async (request,{ rejectWithValue, getState }) => {
      try {
        const res = await GetPagedListOrderAPI(request, request.page, request.pagesize);
        return res.data;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );

  export const getCustomerOrderList = createAsyncThunk(
    "order/getCustomerOrderList",
    async (request,{ rejectWithValue, getState }) => {
      try {
        //const state = getState();
        const res = await GetOrderByCreatedUserIdAPI(request, request.page, request.pagesize);
        return res.data;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );

  export const UpdateOrderStatus = createAsyncThunk(
    'order/updateOrderStatus',
    async (request, { rejectWithValue, getState })=>{
        try{
            const res = await UpdateOrderStatusAPI(request);
            return res.data;
        }catch(error) {
            return rejectWithValue(error);
        }
    }
);

export const UpdateOrderDeliveryPerson = createAsyncThunk(
  'order/UpdateOrderDeliveryPerson',
  async (request, { rejectWithValue, getState })=>{
      try{
          const res = await UpdateOrderDeliveryPersonAPI(request);
          return res.data;
      }catch(error) {
          return rejectWithValue(error);
      }
  }
);