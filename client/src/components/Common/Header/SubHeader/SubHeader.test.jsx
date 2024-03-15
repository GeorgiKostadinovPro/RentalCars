import { cleanup, render, screen } from '@testing-library/react'

import { SubHeader } from "./SubHeader"

describe('SubHeader Component', () => {
    beforeEach(() => {
      render(<SubHeader />);
    });

    afterEach(() => {
      cleanup();
    });

    it("renders sub header with correct content", () => {
      const emailElement = screen.getByText(/kostadinovgeorgi16@gmail.com/i);
      const phoneElement = screen.getByText(/\+359-879454529/i);

      expect(emailElement).toBeInTheDocument();
      expect(phoneElement).toBeInTheDocument();
    });

    it("social media links have correct href", () => {
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
});