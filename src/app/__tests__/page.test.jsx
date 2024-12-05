import { render, screen } from "../lib/testUtils";
import Page from "../page";

describe("Page", () => {
  it("renders a heading", () => {
    render(<Page />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });
});
