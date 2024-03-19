import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react'

import { BrowserRouter } from 'react-router-dom'

import { AuthProvider } from "../../../contexts/AuthContext"

import { Services } from "./Services"

describe('Services Component', () => {
    beforeEach(() => {
      render(
        <BrowserRouter>
          <AuthProvider>
            <Services />
          </AuthProvider>
        </BrowserRouter>
      );
    });

    afterEach(() => {
        cleanup();
    });

    it('renders services correctly', () => {
        expect(screen.getByText('Rent Cars')).toBeInTheDocument();
        expect(screen.getByText('Our Blog')).toBeInTheDocument();
        expect(screen.getByText('Contact Us')).toBeInTheDocument();
    });

    it('navigates to Cars when catalog link is clicked', async () => {
        fireEvent.click(screen.getByText('Catalog'));

        await waitFor(() => {
            expect(window.location.pathname).toBe('/cars');
        });
    });

    it('navigates to Blog when our blog link is clicked', async () => {
        fireEvent.click(screen.getByText('Read More'));

        await waitFor(() => {
            expect(window.location.pathname).toBe('/blog');
        });
    });

    it('navigates to Contact when contact link is clicked', async () => {
        fireEvent.click(screen.getByText('Contact'));

        await waitFor(() => {
            expect(window.location.pathname).toBe('/contact');
        });
    });
});