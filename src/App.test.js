import { render, screen } from '@testing-library/react';
import App from './App';

test('renders bootstrap grid rows', () => {
  const { container } = render(<App />);
  const rows = container.getElementsByClassName('row');

  expect(rows.length).toBeGreaterThan(0);
});
