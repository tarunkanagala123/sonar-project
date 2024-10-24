import { render, screen } from '@testing-library/react';
import Homepage from './Homepage';

test('renders welcome message', () => {
  render(<Homepage />);
  const welcomeElement = screen.getByText(/Welcome to Homepage/i);
  expect(welcomeElement).toBeInTheDocument();
});
