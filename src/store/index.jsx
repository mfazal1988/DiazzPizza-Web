import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { categorySlice } from "./category/categorySlice";
import { productSlice } from "./product/productSlice";
import { orderSlice } from "./order/orderSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        category: categorySlice.reducer,
        product: productSlice.reducer,
        order: orderSlice.reducer
    }
})

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;