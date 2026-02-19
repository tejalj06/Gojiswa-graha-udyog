import type { RootState } from "../store";

export const selectCartItemsMap = (state: RootState) => state.cart.items;

export const selectCartTotalCount = (state: RootState) => {
  const items = Object.values(state.cart.items);
  return items.reduce((sum, item) => sum + item.quantity, 0);
};

export const selectCartTotalPrice = (state: RootState) => {
  const items = Object.values(state.cart.items);
  return items.reduce(
    (sum, item) => sum + (item.quantity ?? 0) * (item.price ?? 0),
    0,
  );
};
