import { render, screen } from '@testing-library/react';
import ContactPage from './ContactPage';

test('renders contact page message', () => {
  render(<ContactPage />);
  const welcomeElement = screen.getByText(/Welcome to Contact Page/i);
  expect(welcomeElement).toBeInTheDocument();
});
