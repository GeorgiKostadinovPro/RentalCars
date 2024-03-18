import { cleanup, render, screen } from '@testing-library/react'

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
    });

    it("renders without crashing", () => {
        const slides = screen.getAllByTestId('swiper-slide-testid');

        expect(slides.length).toBe(3);
    });

    it("renders correct slide content", () => {
      const slides = screen.getAllByText("Welcome to Rental Cars!");

      expect(slides.length).toBe(3);
    });
});