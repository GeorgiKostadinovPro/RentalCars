import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react'

import { BrowserRouter } from 'react-router-dom'

import { AuthProvider } from "../../../contexts/AuthContext"

import { CreateReview } from "./CreateReview"

describe('CreateReview Component', () => {
    let dom;

    beforeEach(() => {
      dom = render(
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
      const stars = dom.container.querySelectorAll('.fa-star');
      const messageTextArea = screen.getByPlaceholderText("Your message...");
      const submitButton = screen.getByText("Post Review");

      expect(stars.length).toBe(5);
      expect(messageTextArea).toBeInTheDocument();
      expect(submitButton).toBeInTheDocument();
    });

    test('submits the form with valid rating and message', async () => {
        const stars = dom.container.querySelectorAll('.fa-star');
        const messageTextArea = screen.getByPlaceholderText('Your message...');
        const submitButton = screen.getByText('Post Review');
    
        fireEvent.click(stars[3]);
        fireEvent.change(messageTextArea, { target: { value: 'Test message' } });
        fireEvent.click(submitButton);
    
        await waitFor(() => {
          expect(dom.container.querySelectorAll(".checked").length).toBe(0);
          expect(messageTextArea).toHaveValue("");
        });
    });

    test('does not submit the form with invalid rating', async () => {
        const messageTextArea = screen.getByPlaceholderText('Your message...');
        const submitButton = screen.getByText('Post Review');
    
        fireEvent.change(messageTextArea, { target: { value: 'Test message' } });
        fireEvent.click(submitButton);
    
        await waitFor(() => {
            expect(screen.getByText('Please add a valid rating!')).toBeInTheDocument();
        });
    });

    test('sets the rating when a star is clicked', async () => {
        const stars = dom.container.querySelectorAll('.fa-star');

        fireEvent.click(stars[3]);

        await waitFor(() => {
            const chosenRating = dom.container.querySelectorAll('.checked');
            expect(chosenRating.length).toBe(4);
        });
    });

    test('does not submit the form with empty message', async () => {
        const messageTextArea = screen.getByPlaceholderText('Your message...');
        const submitButton = screen.getByText('Post Review');
    
        fireEvent.change(messageTextArea, { target: { value: '' } });
        fireEvent.click(submitButton);
    
        await waitFor(() => {
            expect(screen.getByText('A valid message is required!')).toBeInTheDocument();
        });
    });

    test('does not submit the form with message length < 5', async () => {
        const messageTextArea = screen.getByPlaceholderText('Your message...');
        const submitButton = screen.getByText('Post Review');
    
        fireEvent.change(messageTextArea, { target: { value: 'Test' } });
        fireEvent.click(submitButton);
    
        await waitFor(() => {
            expect(screen.getByText('The message should be at least 5 symbols long!')).toBeInTheDocument();
        });
    });
});