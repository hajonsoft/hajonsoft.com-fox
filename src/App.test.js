import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// LiveKit components use ESM modules not supported by Jest
jest.mock('./conference/Meeting', () => {
  return function MockConferenceMeeting() {
    return <div data-testid="conference-meeting">Conference</div>;
  };
});

test('renders the application without crashing', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const elements = screen.getAllByText(/HAJonSoft/i);
  expect(elements.length).toBeGreaterThan(0);
});
