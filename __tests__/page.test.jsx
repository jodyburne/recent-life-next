import "@testing-library/jest-dom";
import { render, screen } from "../src/app/lib/testUtils";
import Page from "../src/app/page";

describe("Page", () => {
  it("renders a heading", () => {
    render(<Page />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });
});
