import React from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";
import { getByTestId } from "@testing-library/dom";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import store from "../../store";
import Login from ".";

describe("Login Page", () => {
  const setupRoutingContainer = () =>
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/sign-in"]}>
          <Login />
        </MemoryRouter>
      </Provider>
    );
  test("should render login page", async () => {
    const { container } = setupRoutingContainer();

    const login = getByTestId(container, "login-container");
    expect(login).toBeInTheDocument();
  });
});
