// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders TokenExa title', () => {
    render(<App />);
    const titleElement = screen.getByText(/TokenExa/i);
    expect(titleElement).toBeInTheDocument();
});
