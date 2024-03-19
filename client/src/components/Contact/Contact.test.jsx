import { cleanup, render, screen } from '@testing-library/react'

import { BrowserRouter } from 'react-router-dom'

import { AuthProvider } from "../../contexts/AuthContext"

import { Contact } from "./Contact"

jest.mock("./ContactForm/ContactForm", () => ({
  __esModule: true,
  ContactForm: () => {
    return <mock-contact-form />;
  }
}));

describe('Contact Component', () => {
    beforeEach(() => {
      render(
        <BrowserRouter>
          <AuthProvider>
            <Contact />
          </AuthProvider>
        </BrowserRouter>
      );
    });

    afterEach(() => {
        cleanup();
        jest.clearAllMocks();
    });

    it("renders contact headings", () => {
      const headings = screen.getAllByRole("heading");
      expect(headings[0]).toHaveTextContent("Contact Us");
      expect(headings[1]).toHaveTextContent("Phone");
      expect(headings[2]).toHaveTextContent("Email");
      expect(headings[3]).toHaveTextContent("Location");
    });

    it("renders contact information", () => {
      const phone = screen.getByText("+359 79454529");
      expect(phone).toBeInTheDocument();

      const email = screen.getByText("kostadinovgeorgi@gmail.com");
      expect(email).toBeInTheDocument();

      const location = screen.getByText("Location");
      expect(location).toBeInTheDocument();
    });

    it("renders link to Google Maps", () => {
      const googleMapsLink = screen.getByText("View on Google Maps",);
      expect(googleMapsLink).toBeInTheDocument();

      expect(googleMapsLink).toHaveAttribute(
        "href",
        "https://www.google.com/maps/search/?api=1&query=bul.+Bruksel,+1517+Sofia+Bulgaria"
      );
    });
});