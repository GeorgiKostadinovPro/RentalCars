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

    it('should navigate to home page', async () => {
        const homeLink = screen.getByText('Home');

        expect(homeLink).toBeInTheDocument();

        userEvent.click(homeLink);

        await waitFor(() => {
            expect(window.location.pathname).toBe('/');
        });
    });

    it('should navigate to cars page', async () => {
      const carsLink = screen.getByText('Cars');
      expect(carsLink).toBeInTheDocument();
      userEvent.click(carsLink);
      await waitFor(() => {
          expect(window.location.pathname).toBe('/cars');
      });
  });

  it('should navigate to about us page', async () => {
      const aboutLink = screen.getByText('About');
      expect(aboutLink).toBeInTheDocument();
      userEvent.click(aboutLink);
      const aboutUsLink = await screen.findByText('About Us');
      expect(aboutUsLink).toBeInTheDocument();
      userEvent.click(aboutUsLink);
      await waitFor(() => {
          expect(window.location.pathname).toBe('/about');
      });
  });

  it('should navigate to blog page', async () => {
      const aboutLink = screen.getByText('About');
      expect(aboutLink).toBeInTheDocument();
      userEvent.click(aboutLink);
      const blogLink = await screen.findByText('Blog');
      expect(blogLink).toBeInTheDocument();
      userEvent.click(blogLink);
      await waitFor(() => {
          expect(window.location.pathname).toBe('/blog');
      });
  });

  it('should navigate to terms page', async () => {
      const aboutLink = screen.getByText('About');
      expect(aboutLink).toBeInTheDocument();
      userEvent.click(aboutLink);
      const termsLink = await screen.findByText('Terms');
      expect(termsLink).toBeInTheDocument();
      userEvent.click(termsLink);
      await waitFor(() => {
          expect(window.location.pathname).toBe('/terms');
      });
  });

  it('should navigate to contact us page', async () => {
      const contactLink = screen.getByText('Contact Us');
      expect(contactLink).toBeInTheDocument();
      userEvent.click(contactLink);
      await waitFor(() => {
          expect(window.location.pathname).toBe('/contact');
      });
  });

  it('should navigate to login page when not authenticated', async () => {
      const loginLink = screen.getByText('Login');
      expect(loginLink).toBeInTheDocument();
      userEvent.click(loginLink);
      await waitFor(() => {
          expect(window.location.pathname).toBe('/login');
      });
  });
});