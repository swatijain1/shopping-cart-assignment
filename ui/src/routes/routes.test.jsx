import { render, screen } from "@testing-library/react";
import Routes from ".";

test("renders learn react link", () => {
  render(<Routes />);
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});
