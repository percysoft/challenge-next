import { render, screen } from '@testing-library/react';
import Footer from "./Footer";

describe('Footer component', () => {
  it("renders Software Engineer text", () => {
    render(<Footer />);
    const softwareEngineerText = screen.getByText(/Software Engineer/i);
    expect(softwareEngineerText).toBeInTheDocument();
  });

  it('renders Frontend Developer text', () => {
    render(<Footer />);
    const frontendDeveloperText = screen.getByText(/Frontend Developer/i);
    expect(frontendDeveloperText).toBeInTheDocument();
  });

  it('has the correct CSS classes applied', () => {
    render(<Footer />);
    const footerElement = screen.getByRole('contentinfo');
    const textElements = screen.getAllByText(
      /Software Engineer|Frontend Developer/i
    );

    expect(footerElement).toHaveClass('footer');
    textElements.forEach((textElement) => {
      expect(textElement).toHaveClass('text');
    });
  });
});
