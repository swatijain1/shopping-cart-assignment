import React from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";
import { getByTestId } from "@testing-library/dom";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import store from "../../store";
import Home from ".";

describe("Home Page", () => {
  const setupRoutingContainer = () =>
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/"]}>
          <Home />
        </MemoryRouter>
      </Provider>
    );
  test("should render home page", async () => {
    const { container } = setupRoutingContainer();

    const home = getByTestId(container, "home-container");
    expect(home).toBeInTheDocument();
  });
});
