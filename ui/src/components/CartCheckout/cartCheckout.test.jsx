import React from "react";
import { getByText } from "@testing-library/dom";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import CartCheckout from ".";

describe("Cart checkout", () => {
  const mockFunction = () => {};
  const params = {
    displayTotalPrice: "12.20",
    isEmptyCart: false,
    closeCart: mockFunction,
    onCheckout: mockFunction,
  };

  test("should render cart checkout component with items in it", async () => {
    const setupRoutingContainer = () => render(<CartCheckout {...params} />);

    const { container } = setupRoutingContainer();

    const cartCheckout = getByText(container, "Proceed to checkout");
    expect(cartCheckout).toBeInTheDocument();
  });

  test("should render cart checkout component with no items in it", async () => {
    const newParams = { ...params, isEmptyCart: true };
    const setupRoutingContainer = () => render(<CartCheckout {...newParams} />);

    const { container } = setupRoutingContainer();

    const cartCheckout = getByText(container, "Start Shopping");
    expect(cartCheckout).toBeInTheDocument();
  });
});
