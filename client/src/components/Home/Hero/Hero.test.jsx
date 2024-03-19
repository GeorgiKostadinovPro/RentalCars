import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react'

import { BrowserRouter } from 'react-router-dom'

import { AuthProvider } from "../../../contexts/AuthContext"

import { Hero } from "./Hero"

jest.mock("swiper/react", () => ({
  Swiper: ({ children }) => <div data-testid="swiper-testid">{children}</div>,
  SwiperSlide: ({ children }) => (
    <div data-testid="swiper-slide-testid">{children}</div>
  )
}));

jest.mock("swiper/modules", () => ({
  Navigation: (props) => null,
  Autoplay: (props) => null
}));

jest.mock('swiper/css', () => jest.fn());

describe('Hero Component', () => {
    let dom;

    beforeEach(() => {
      dom = render(
        <BrowserRouter>
          <AuthProvider>
            <Hero />
          </AuthProvider>
        </BrowserRouter>
      );
    });

    afterEach(() => {
        cleanup();
        jest.clearAllMocks();
    });

    it("renders without crashing", () => {
        const slides = screen.getAllByTestId('swiper-slide-testid');

        expect(slides.length).toBe(3);
    });

    it("navigates to About page", async () => {
      const aboutLinks = screen.getAllByText("about us");

      fireEvent.click(aboutLinks[0]);

      await waitFor(() => {
        expect(window.location.pathname).toBe("/about");
      });
    });
});