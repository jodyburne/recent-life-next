import { render, screen } from "../lib/testUtils";
import Page from "../page";

describe("Page", () => {
  it("renders a heading", () => {
    render(<Page />);

    const heading = screen.getByText("Thank you for coming by...");

    expect(heading).toBeInTheDocument();
  });
});
