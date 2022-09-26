import React from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";
import { getByTestId } from "@testing-library/dom";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import store from "../../store";
import Register from ".";

describe("Register", () => {
  const setupRoutingContainer = () =>
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/register"]}>
          <Register />
        </MemoryRouter>
      </Provider>
    );

  test("should render register page", async () => {
    const { container } = setupRoutingContainer();

    const register = getByTestId(container, "register-container");
    expect(register).toBeInTheDocument();
  });
});
