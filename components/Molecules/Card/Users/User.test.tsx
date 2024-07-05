import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { UserInfo } from './User';

describe('UserInfo Component', () => {
  const props = {
    userImage: '/path/to/image.jpg',
    username: 'John Doe'
  };

  test('renders the username', () => {
    render(<UserInfo {...props} />);
    const usernameElement = screen.getByText('John Doe');
    expect(usernameElement).toBeInTheDocument();
  });

  test('renders the online dot', () => {
    render(<UserInfo {...props} />);
    const onlineDot = screen.getByTestId('online-dot');
    expect(onlineDot).toBeInTheDocument();
  });
});
