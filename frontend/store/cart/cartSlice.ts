import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

type CartState = {
  items: Record<string, CartItem>;
};

const initialState: CartState = {
  items: {},
};

type AddItemPayload = {
  id: string;
  name: string;
  price: number;
};
type RemoveItemPayload = {
  id: string;
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<AddItemPayload>) => {
      const { id, name, price } = action.payload;
      const existingItem = state.items[id];

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items[id] = { id, name, price, quantity: 1 };
      }
    },

    removeItem: (state, action: PayloadAction<RemoveItemPayload>) => {
      const { id } = action.payload;
      const existingItem = state.items[id];

      if (!existingItem) return;

      if (existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      } else {
        delete state.items[id];
      }
    },
    clearCart: (state) => {
      state.items = {};
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
