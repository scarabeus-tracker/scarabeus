import { render, screen } from '@testing-library/react';
import Signup from './Register';

it('should render an h2 element', () => {
  render(<Signup />);
  const headingElement = screen.getByRole('heading');
  expect(headingElement).toBeInTheDocument();
});

it('should render two password inputs', () => {
  render(<Signup />);
  const inputElements = screen.getAllByText(/password/i);
  expect(inputElements.length).toBe(2);
});