// store.js
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cartSlice/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
