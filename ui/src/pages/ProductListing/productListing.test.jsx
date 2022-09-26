import React from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";
import { getByTestId } from "@testing-library/dom";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import store from "../../store";
import ProductListing from ".";

describe("Product listing", () => {
  const setupRoutingContainer = () =>
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/products"]}>
          <ProductListing />
        </MemoryRouter>
      </Provider>
    );
  test("should render product listing page", async () => {
    const { container } = setupRoutingContainer();

    const productListing = getByTestId(container, "product-listing-container");
    expect(productListing).toBeInTheDocument();
  });
});
