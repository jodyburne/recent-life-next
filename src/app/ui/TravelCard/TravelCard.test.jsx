import { render, screen } from "@/app/lib/testUtils";
import { koreaMock } from "@/app/lib/mockData";
import TravelCard from ".";

describe("TravelCard", () => {
  it("renders a heading", () => {
    render(<TravelCard {...koreaMock} />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });
  it("renders a description if one is provided", () => {
    render(<TravelCard {...koreaMock} />);

    const description = screen.getByRole("paragraph");

    expect(description).toBeInTheDocument();
  });
  it("renders an image", () => {
    render(<TravelCard {...koreaMock} />);

    const image = screen.getByRole("img");

    expect(image).toBeInTheDocument();
  });
  it("renders a button", () => {
    render(<TravelCard {...koreaMock} />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });
});
