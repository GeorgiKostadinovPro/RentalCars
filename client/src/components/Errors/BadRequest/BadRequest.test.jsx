import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react'

import { BrowserRouter } from 'react-router-dom'

import { AuthProvider } from "../../../contexts/AuthContext"

import { BadRequest } from "./BadRequest"

describe('BadRequest Component', () => {
    let dom;
    const resetErrorBoundary = jest.fn();

    beforeEach(() => {
      jest.useFakeTimers();

      dom = render(
        <BrowserRouter>
          <AuthProvider>
            <BadRequest resetErrorBoundary={resetErrorBoundary} />
          </AuthProvider>
        </BrowserRouter>
      );
    });

    afterEach(() => {
        cleanup();
        jest.clearAllMocks();
    });

    it("displays loading indicator initially", () => {
      const loading = dom.container.querySelector("#preloader .jumper");

      expect(loading).toBeInTheDocument();
    });

    it("renders error boundary after timeout", async () => {
      jest.advanceTimersByTime(1000);

      await waitFor(() => {
        expect(screen.getByText("Something went wrong!")).toBeInTheDocument();
      });
    });

    it('calls resetErrorBoundary when "Try again" is clicked', async () => {
      jest.advanceTimersByTime(1000);

      await waitFor(() => {
        const tryAgainButton = screen.getByText("Try again");

        fireEvent.click(tryAgainButton);

        expect(resetErrorBoundary).toHaveBeenCalledTimes(1);
      });
    });

    it("renders social media links with correct href attributes", async () => {
      jest.advanceTimersByTime(1000);

      await waitFor(() => {
        const facebookLink = screen.getByTestId("facebook-link");
        const instagramLink = screen.getByTestId("instagram-link");
        const linkedinLink = screen.getByTestId("linkedin-link");

        expect(facebookLink).toHaveAttribute("href", "https://www.facebook.com/george.kostadinov.372");
        expect(instagramLink).toHaveAttribute("href", "https://www.instagram.com/george.kostadinov.372");
        expect(linkedinLink).toHaveAttribute("href", "https://www.linkedin.com/in/georgi-kostadinov-125349241/");
      });
    });
});