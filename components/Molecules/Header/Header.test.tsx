import { render, screen } from '@testing-library/react';
import Header from './Header';

describe("Header component", () => {
  it("renders username is correctly", () => {
    const username = "John Doe";
    const userImage = "/perfil.png";

    render(<Header username={username} userImage={userImage} />);

    const usernameElement = screen.getByText(username);
    expect(usernameElement).toBeInTheDocument();

    const userImageElement = screen.getByAltText(`${username}'s profile`);
    expect(userImageElement).toBeInTheDocument();
  });

  it("renders online status ", () => {
    const username = "John Doe";
    const userImage = "/perfil.png";

    render(<Header username={username} userImage={userImage} />);

    const onlineDotElement = screen.getByTestId("online-dot");
    expect(onlineDotElement).toBeInTheDocument();
  });
});
