import { cleanup, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { BrowserRouter } from 'react-router-dom'

import { AuthProvider } from "../../../contexts/AuthContext"

import { Header } from "./Header"

describe('Header Component', () => {
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
    });

    it('should navigae to home page', async () => {
        const homeLink = screen.getByText('Home');

        expect(homeLink).toBeInTheDocument();

        userEvent.click(homeLink);

        await waitFor(() => {
            expect(window.location.pathname).toBe('/');
        });
    });
});