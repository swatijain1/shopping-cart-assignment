import React from "react";
import { Provider } from "react-redux";
import { getByText, fireEvent } from "@testing-library/dom";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import configureMockStore from "redux-mock-store";

import store from "../../store";
import CartItems from ".";

describe("Cart items", () => {
  const mockStore = configureMockStore([]);
  const items = [
    {
      product: {
        name: "Fresho Kiwi - Green, 3 pcs",
        imageURL: "/images/products/fruit-n-veg/kiwi-green.jpg",
        description:
          "Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny, edible black seeds.",
        price: 87,
        stock: 50,
        category: "5b6899953d1a866534f516e2",
        sku: "fnw-kiwi-3",
        id: "5b6c6a7f01a7c38429530883",
      },
      productId: "5b6c6a7f01a7c38429530883",
      quantity: 1,
      totalItemPrice: 87,
    },
  ];

  let state = {
    ...store,
    cart: {
      totalItems: 1,
      totalPrice: 87,
      displayTotalPrice: "87.00",
      items,
    },
  };
  const newStore = mockStore(() => state);

  test("should render cart items component with elements in it", async () => {
    const setupRoutingContainer = () =>
      render(
        <Provider store={store}>
          <CartItems items={items} />
        </Provider>
      );

    const { container } = setupRoutingContainer();

    const cartItems = getByText(container, items[0].product.name);
    expect(cartItems).toBeInTheDocument();
  });

  test("should render cart items component with no items in it", async () => {
    const setupRoutingContainer = () =>
      render(
        <Provider store={store}>
          <CartItems items={[]} />
        </Provider>
      );

    const { container } = setupRoutingContainer();

    const cartItems = getByText(container, "No items in your cart");
    expect(cartItems).toBeInTheDocument();
  });

  test("should add items when clicking the + button", async () => {
    const setupRoutingContainer = () =>
      render(
        <Provider store={store}>
          <CartItems items={items} />
        </Provider>
      );

    const { container } = setupRoutingContainer();
    expect(store.getState().cart.totalItems).toBe(0);
    await fireEvent.click(getByText(container, "+"));
    expect(store.getState().cart.totalItems).toBe(1);
  });

  test.skip("should remove items when clicking the - button", async () => {
    const setupRoutingContainer = () =>
      render(
        <Provider store={newStore}>
          <CartItems items={items} />
        </Provider>
      );

    const { container } = setupRoutingContainer();

    expect(store.getState().cart.totalItems).toBe(1);
    await fireEvent.click(getByText(container, "+"));
    expect(store.getState().cart.totalItems).toBe(2);
    await fireEvent.click(getByText(container, "-"));
    expect(store.getState().cart.totalItems).toBe(1);
  });
});
