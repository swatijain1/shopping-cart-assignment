import React from "react";
import { getByTestId } from "@testing-library/dom";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Divider from ".";

describe("Divider", () => {
  const setupRoutingContainer = () => render(<Divider />);

  test("should render Divider", async () => {
    const { container } = setupRoutingContainer();

    const divider = getByTestId(container, "divider");
    expect(divider).toBeInTheDocument();
  });
});
