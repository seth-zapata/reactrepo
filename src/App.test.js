import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Click for true art link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Click for true art/i);
  expect(linkElement).toBeInTheDocument();
});
