import { cleanup, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { BrowserRouter } from 'react-router-dom'

import { AuthProvider } from "../../../contexts/AuthContext"

import { Footer } from "./Footer"

describe('Footer Component', () => {
    beforeEach(() => {
        render(
          <BrowserRouter>
            <AuthProvider>
              <Footer />
            </AuthProvider>
          </BrowserRouter>
        );
    });

    afterEach(() => {
        cleanup();
    });

    it('should render Rental Cars text', () => {
        const rentalCarsText = screen.getByText('Rental Cars');
        expect(rentalCarsText).toBeInTheDocument();
    });

    it('should render social media links', () => {
        const facebookLink = screen.getByTestId("facebook-link");
        const instagramLink = screen.getByTestId("instagram-link");
        const linkedinLink = screen.getByTestId("linkedin-link");

        expect(facebookLink).toHaveAttribute(
          "href",
          "https://www.facebook.com/george.kostadinov.372"
        );

        expect(instagramLink).toHaveAttribute(
          "href",
          "https://www.instagram.com/george.kostadinov.372"
        );

        expect(linkedinLink).toHaveAttribute(
          "href",
          "https://www.linkedin.com/in/georgi-kostadinov-125349241/"
        );
    });

    it('should render "Our Car Army" section', () => {
        const carArmyText = screen.getByText('Our Car Army');
        expect(carArmyText).toBeInTheDocument();
    });

    it('should render "Additional Info" section', () => {
        const additionalInfoText = screen.getByText('Additional Info');
        expect(additionalInfoText).toBeInTheDocument();
    });

    it('should render "Sub Footer" with copyright text', () => {
        const subFooterText = screen.getByText('Copyright © 2024 Rentals Cars - by Georgi Kostadinov');
        expect(subFooterText).toBeInTheDocument();
    });

    it('should navigate to Cars page when "Cars for rent" link is clicked', async () => {
      const carsLink = screen.getByText("Cars for rent");

      expect(carsLink).toBeInTheDocument();

      userEvent.click(carsLink);

      await waitFor(() => {
        expect(window.location.pathname).toBe("/cars");
      });
    });

    it('should navigate to About page when "About us" link is clicked', async () => {
      const aboutLink = screen.getByText("About Us");

      expect(aboutLink).toBeInTheDocument();

      userEvent.click(aboutLink);

      await waitFor(() => {
        expect(window.location.pathname).toBe("/about");
      });
    });

    it('should navigate to Blog page when "Blog" link is clicked', async () => {
      const blogLink = screen.getByText("Blog");

      expect(blogLink).toBeInTheDocument();

      userEvent.click(blogLink);

      await waitFor(() => {
        expect(window.location.pathname).toBe("/blog");
      });
    });

    it('should navigate to Contact page when "Contact Us" link is clicked', async () => {
      const contactLink = screen.getByText("Contact Us");

      expect(contactLink).toBeInTheDocument();

      userEvent.click(contactLink);

      await waitFor(() => {
        expect(window.location.pathname).toBe("/contact");
      });
    });

    it('should navigate to Terms page when "Terms" link is clicked', async () => {
      const termsLink = screen.getByText("Terms");

      expect(termsLink).toBeInTheDocument();

      userEvent.click(termsLink);

      await waitFor(() => {
        expect(window.location.pathname).toBe("/terms");
      });
    });
});