import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Button } from "./Button";

describe("Button Component", () => {
  const props = {
    type: "submit",
    onChange: jest.fn(),
    label: "Submit",
  };

  test("renders the button with the correct label", () => {
    render(<Button {...props} />);
    const buttonElement = screen.getByText("Submit");
    expect(buttonElement).toBeInTheDocument();
  });

  test("renders the button with the correct type", () => {
    render(<Button {...props} />);
    const buttonElement = screen.getByText("Submit");
    expect(buttonElement).toHaveAttribute("type", "submit");
  });

  test("calls onChange when clicked", () => {
    render(<Button {...props} />);
    const buttonElement = screen.getByText("Submit");
    fireEvent.click(buttonElement);
    expect(props.onChange).toHaveBeenCalledTimes(1);
  });
});
