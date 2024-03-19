import { cleanup, fireEvent, render, waitFor } from '@testing-library/react'

import { BrowserRouter } from 'react-router-dom'

import { AuthProvider } from "../../contexts/AuthContext"

import { Home } from "./Home"

jest.mock("swiper/react", () => ({
  Swiper: ({ children }) => <div data-testid="swiper-testid">{children}</div>,
  SwiperSlide: ({ children }) => (
    <div data-testid="swiper-slide-testid">{children}</div>
  )
}));

jest.mock("swiper/modules", () => ({
  Navigation: (props) => null,
  Autoplay: (props) => null,
}));

jest.mock("swiper/css", () => jest.fn());

jest.mock('./BlogInfo/BlogInfo', () => ({
  BlogInfo: () => {
    return <mock-blog-info />
  }
}));

describe('Home Component', () => {
    let dom;

    beforeEach(() => {
      dom = render(
        <BrowserRouter>
          <AuthProvider>
            <Home />
          </AuthProvider>
        </BrowserRouter>
      );
    });

    afterEach(() => {
        cleanup();
    });

    it('renders home page correctly', () => {
        const facts = dom.container.querySelector('.fun-facts');
        
        expect(facts).not.toBeNull;
    });

    it('navigates to About page when catalog link is clicked', async () => {
        const aboutLink = dom.container.querySelector('.fun-facts a.filled-button');

        fireEvent.click(aboutLink);

        await waitFor(() => {
            expect(window.location.pathname).toBe('/about');
        });
    });
});