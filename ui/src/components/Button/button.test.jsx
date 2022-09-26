import React from "react";
import { getByText } from "@testing-library/dom";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Button from ".";

describe("Button", () => {
  const mockFunction = () => {};
  const buttonText = "Mock button";
  const setupRoutingContainer = () =>
    render(<Button onClickHandler={mockFunction}>{buttonText}</Button>);

  test("should render button", async () => {
    const { container } = setupRoutingContainer();

    const button = getByText(container, buttonText);
    expect(button).toBeInTheDocument();
  });
});
