import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders the application without crashing', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const elements = screen.getAllByText(/HAJonSoft/i);
  expect(elements.length).toBeGreaterThan(0);
});
