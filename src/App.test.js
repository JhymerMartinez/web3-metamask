import { render, screen } from '@testing-library/react';
import { App } from './App';

test('renders Connect button', () => {
  render(<App />);
  const title = screen.getByText(/Demo/i);
  expect(title).toBeInTheDocument();
});
