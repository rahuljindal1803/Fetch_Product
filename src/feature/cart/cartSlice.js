import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   items: [],
};

export const counterSlice = createSlice({
   name: "cart",
   initialState,
   reducers: {
      addItem: (state, action) => {
         state.items.push(action.payload);
      },
      removeItem: (state, action) => {
         state.items = state.items.filter(
            (item) => item.id !== action.payload.id
         );
      },
      clearCart: (state) => {
         state.items = [];
      },
   },
});

export const selectCartItem = (state) => state.cart.items;
export const { addItem, removeItem, clearCart } = counterSlice.actions;
export default counterSlice.reducer;
