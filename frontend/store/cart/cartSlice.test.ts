import cartReducer, {
  addItem,
  removeItem,
  clearCart,
} from "./cartSlice";

describe("cartSlice reducer", () => {
  const initialState = {
    items: {},
  };

  test("should handle addItem (new item)", () => {
    const action = addItem({
      id: "chakli",
      name: "Chakli",
      price: 120,
    });

    const state = cartReducer(initialState, action);

    expect(state.items["chakli"].quantity).toBe(1);
  });

  test("should increase quantity if item already exists", () => {
    const stateWithItem = {
      items: {
        chakli: { id: "chakli", name: "Chakli", price: 120, quantity: 1 },
      },
    };

    const action = addItem({
      id: "chakli",
      name: "Chakli",
      price: 120,
    });

    const state = cartReducer(stateWithItem, action);

    expect(state.items["chakli"].quantity).toBe(2);
  });

  test("should decrease quantity", () => {
    const stateWithItem = {
      items: {
        chakli: { id: "chakli", name: "Chakli", price: 120, quantity: 2 },
      },
    };

    const action = removeItem({ id: "chakli" });

    const state = cartReducer(stateWithItem, action);

    expect(state.items["chakli"].quantity).toBe(1);
  });

  test("should remove item when qty becomes 0", () => {
    const stateWithItem = {
      items: {
        chakli: { id: "chakli", name: "Chakli", price: 120, quantity: 1 },
      },
    };

    const action = removeItem({ id: "chakli" });

    const state = cartReducer(stateWithItem, action);

    expect(state.items["chakli"]).toBeUndefined();
  });

  test("should clear cart", () => {
    const stateWithItems = {
      items: {
        chakli: { id: "chakli", name: "Chakli", price: 120, quantity: 1 },
      },
    };

    const state = cartReducer(stateWithItems, clearCart());

    expect(state.items).toEqual({});
  });
});
