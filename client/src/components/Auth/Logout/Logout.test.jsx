import { cleanup, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { BrowserRouter } from 'react-router-dom'

import { AuthProvider } from "../../../contexts/AuthContext"

import { Header } from "../../Common/Header/Header"

jest.mock("../../../hooks/useAuthContext", () => ({
  useAuthContext: () => ({
    isUserAuthenticated: true
  })
}));

describe('Logout Component', () => {
    beforeEach(() => {
        render(
          <BrowserRouter>
            <AuthProvider>
              <Header />
            </AuthProvider>
          </BrowserRouter>
        );
    });

    afterEach(() => {
        cleanup();
        jest.clearAllMocks();
    });

    it("should logout the user and redirect to home page", async () => {
        const logoutLink = screen.getByText('Logout');

        userEvent.click(logoutLink);

        await waitFor(() => {
            expect(window.location.pathname).toBe('/');
        });
    });
});