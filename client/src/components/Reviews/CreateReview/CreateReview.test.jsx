import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react'

import { BrowserRouter } from 'react-router-dom'

import { AuthProvider } from "../../../contexts/AuthContext"

import { CreateReview } from "./CreateReview"

describe('CreateReview Component', () => {
    beforeEach(() => {
      render(
        <BrowserRouter>
          <AuthProvider>
            <CreateReview createReviewSubmitHandler={() => {}} />
          </AuthProvider>
        </BrowserRouter>
      );
    });

    afterEach(() => {
        cleanup();
        jest.clearAllMocks();
    });

    test("renders the review form", () => {
      const messageTextArea = screen.getByPlaceholderText("Your Message...");
      const submitButton = screen.getByText("Submit");

      expect(messageTextArea).toBeInTheDocument();
      expect(submitButton).toBeInTheDocument();
    });

    test('submits the form with valid data', async () => {
        const messageTextArea = screen.getByPlaceholderText('Your Message...');
        const submitButton = screen.getByText('Submit');

        fireEvent.change(messageTextArea, { target: { value: 'Test message' } });
        fireEvent.click(submitButton);

        await waitFor(() => {
            expect(messageTextArea).toHaveValue('');
        });
    });

    test('does not submit the form with empty message', async () => {
        const messageTextArea = screen.getByPlaceholderText('Your Message...');
        const submitButton = screen.getByText('Submit');
    
        fireEvent.change(messageTextArea, { target: { value: '' } });
        fireEvent.click(submitButton);
    
        await waitFor(() => {
            expect(screen.getByText('A valid message is required!')).toBeInTheDocument();
        });
    });

    test('does not submit the form with message length < 5', async () => {
        const messageTextArea = screen.getByPlaceholderText('Your Message...');
        const submitButton = screen.getByText('Submit');
    
        fireEvent.change(messageTextArea, { target: { value: 'Test' } });
        fireEvent.click(submitButton);
    
        await waitFor(() => {
            expect(screen.getByText('The message should be at least 5 symbols long!')).toBeInTheDocument();
        });
    });
});