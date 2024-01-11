// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // Array of items in the cart
  },
  reducers: {
    addItem: (state, action) => {
      const product = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);

      if (existingItem) {
        // If the item already exists, increase the count by 1
        existingItem.count += 1;
      } else {
        // If the item is not in the cart, add it with count 1
        state.items.push({ ...product, count: 1 });
      }
    },
    increaseQuantity: (state, action) => {
      const itemId = action.payload;
      const item = state.items.find((item) => item.id === itemId);
      if (item) {
        item.count += 1;
      }
    },

    decreaseQuantity: (state, action) => {
      const itemId = action.payload;
      const item = state.items.find((item) => item.id === itemId);
      if (item && item.count > 1) {
        item.count -= 1;
      }
    },

    removeItem: (state, action) => {
      const itemIdToRemove = action.payload;
      state.items = state.items.filter((item) => item.id !== itemIdToRemove);
    },

    removeAllItems: (state) => {
      state.items = [];
    },
  },
});

export const {
  addItem,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
  removeAllItems,
} = cartSlice.actions;

export default cartSlice.reducer;
