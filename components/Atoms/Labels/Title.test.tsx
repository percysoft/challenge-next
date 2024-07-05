import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import styles from '../components/Title.module.css';
import { Title } from './Title';

describe('Title Component', () => {
  test('renders the Title component', () => {
    render(<Title>Test Title</Title>);
    const titleElement = screen.getByText('Test Title');
    expect(titleElement).toBeInTheDocument();
  });

  test('applies the correct class', () => {
    render(<Title>Test Title</Title>);
    const titleElement = screen.getByText('Test Title');
    expect(titleElement).toHaveClass(styles.title);
  });

  test('renders the children content', () => {
    render(<Title>Children Content</Title>);
    const childrenContent = screen.getByText('Children Content');
    expect(childrenContent).toBeInTheDocument();
  });
});
