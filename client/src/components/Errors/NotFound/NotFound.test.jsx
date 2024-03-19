import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react'

import { BrowserRouter } from 'react-router-dom'

import { AuthProvider } from "../../../contexts/AuthContext"

import { NotFound } from "./NotFound"

describe('NotFound Component', () => {
    beforeEach(() => {
      render(
        <BrowserRouter>
          <AuthProvider>
            <NotFound />
          </AuthProvider>
        </BrowserRouter>
      );
    });

    afterEach(() => {
        cleanup();
    });

    it('displays correct heading and text', () => {
        expect(screen.getByText('Page Not Found')).toBeInTheDocument();
        expect(screen.getByText("We can't seem to find the page you're looking for. Please check the URL for any typos."))
        .toBeInTheDocument();
    });

    it('contains links to homepage, blog, and contact', () => {
        const homeLink = screen.getByText('Go to Homepage');
        const blogLink = screen.getByText('Visit our Blog');
        const contactLink = screen.getByText('Contact support');

        expect(homeLink).toBeInTheDocument();
        expect(blogLink).toBeInTheDocument();
        expect(contactLink).toBeInTheDocument();
    });

    it('redirects to home page on link click', async () => {
        const homepageLink = screen.getByText('Go to Homepage');
       
        fireEvent.click(homepageLink);

        await waitFor(() => {
            expect(window.location.pathname).toBe('/');
        });
    });

    it('redirects to blog page on link click', async () => {
        const blogLink = screen.getByText('Visit our Blog');

        fireEvent.click(blogLink);

        await waitFor(() => {
            expect(window.location.pathname).toBe('/blog');
        });
    });

    it('redirects to contact page on link click', async () => {
        const contactLink = screen.getByText('Contact support');
       
        fireEvent.click(contactLink);

        await waitFor(() => {
            expect(window.location.pathname).toBe('/contact');
        });
    });
});