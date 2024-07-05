import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Hamburguer } from ".";

describe("Hamburguer Component", () => {
  const props = {
    onCallback: jest.fn(),
    menuOpen: false,
  };

  test("renders the hamburger icon", () => {
    render(<Hamburguer {...props} />);
    const bars = screen.getAllByRole("presentation");
    expect(bars).toHaveLength(3);
  });

  test("applies the change class when menu is open", () => {
    render(<Hamburguer {...props} menuOpen={true} />);
    const bars = screen.getAllByRole("presentation");
    bars.forEach((bar) => {
      expect(bar).toHaveClass("change");
    });
  });

  test("calls onCallback when clicked", () => {
    render(<Hamburguer {...props} />);
    const hamburger = screen.getByRole("button");
    fireEvent.click(hamburger);
    expect(props.onCallback).toHaveBeenCalledTimes(1);
  });
});
