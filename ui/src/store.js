import { configureStore } from "@reduxjs/toolkit";

import apiSlice from "./api";
import cartSlice from "./reducer/cart";

export default configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
