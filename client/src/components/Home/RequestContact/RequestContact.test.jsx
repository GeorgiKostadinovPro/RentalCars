import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react'

import { BrowserRouter } from 'react-router-dom'

import { AuthProvider } from "../../../contexts/AuthContext"

import { RequestContact } from "./RequestContact"

describe('RequestContact Component', () => {
    beforeEach(() => {
      render(
        <BrowserRouter>
          <AuthProvider>
            <RequestContact />
          </AuthProvider>
        </BrowserRouter>
      );
    });

    afterEach(() => {
        cleanup();
    });

    it("renders correctly", () => {
      expect(screen.getByText("Request a call back right now ?")).toBeInTheDocument();
    });

    it("navigates to Contact page", async () => {
      const contactLink = screen.getByText("Contact Us");

      fireEvent.click(contactLink);

      await waitFor(() => {
        expect(window.location.pathname).toBe("/contact");
      });
    });
});