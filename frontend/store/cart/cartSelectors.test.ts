import { selectCartTotalCount, selectCartTotalPrice } from "./cartSelectors";

describe("cart selectors", () => {
  test("selectCartTotalCount returns total quantity", () => {
    const mockState: any = {
      cart: {
        items: {
          chakli: { id: "chakli", name: "Chakli", price: 120, quantity: 2 },
          sev: { id: "sev", name: "Sev", price: 90, quantity: 1 },
        },
      },
    };

    expect(selectCartTotalCount(mockState)).toBe(3);
  });

  test("selectCartTotalPrice returns correct total price", () => {
    const mockState: any = {
      cart: {
        items: {
          chakli: { id: "chakli", name: "Chakli", price: 120, quantity: 2 },
          sev: { id: "sev", name: "Sev", price: 90, quantity: 1 },
        },
      },
    };

    expect(selectCartTotalPrice(mockState)).toBe(330);
  });

  test("selectCartTotalPrice returns 0 when cart empty", () => {
    const mockState = { cart: { items: {} } };

    expect(selectCartTotalPrice(mockState as any)).toBe(0);
  });

  test("selectCartTotalPrice handles missing quantity/price safely", () => {
    const mockState = {
      cart: {
        items: {
          chakli: { id: "chakli", name: "Chakli", price: 120 } as any, // qty missing
          sev: { id: "sev", name: "Sev", quantity: 2 } as any, // price missing
        },
      },
    };

    expect(selectCartTotalPrice(mockState as any)).toBe(0);
  });
});
