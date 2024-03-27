import { act, cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react'

import { BrowserRouter } from 'react-router-dom'

import { AuthProvider } from "../../../contexts/AuthContext"

import { CarDetails } from "./CarDetails"

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
jest.mock('swiper/css/navigation', () => jest.fn());

jest.mock('../../Reviews/Reviews', () => ({
    Reviews: () => {
        return <mock-reviews data-testid='reviews' />;
    }
}));

jest.mock('../../Rents/RentForm/RentForm', () => ({
    RentForm: () => {
        return <mock-rent-form data-testid='rent-form' />;
    }
}));

jest.mock('../../../hooks/useAuthContext', () => ({
    useAuthContext: () => ({
        userId: '1'
    })
}));

jest.mock('../../../services/favouriteService', () => ({
    getFavourite: jest.fn().mockResolvedValue({
        _ownerId: "1",
        carId: "1",
    }),
    createFavourite: jest.fn().mockResolvedValue({ _id: '1' }),
    deleteFavourite: jest.fn()
}));

jest.mock('../../../services/carService', () => ({
    getById: jest.fn().mockResolvedValue({
        _id: '1',
        make: "Ford",
        model: "Mustang",
        type: "Coupe",
        year: 2022,
        pricePerDay: 60,
        transmission: "Automatic",
        doors: 2,
        luggageCapacity: 2,
        maxPeople: 4,
        horsePower: 450,
        fuelType: "Petrol",
        mileAge: 16000,
        description: "Experience the power and style of the Ford Mustang, a classic coupe with a thrilling performance.",
        _createdOn: 1614260681375,
        location: "Sofia, Bulgaria",
        gallery: [
            "https://res.cloudinary.com/de1i8aava/image/upload/v1708179184/RentalCars/assets/cars-gallery-pictures/ford-mustang_c0ldko.jpg",
            "https://res.cloudinary.com/de1i8aava/image/upload/v1708179184/RentalCars/assets/cars-gallery-pictures/ford-mustang-interior_qlfqou.jpg"
        ],
        author: {
            username: 'User1',
            email: 'user1@abv.bg',
            profilePictureUrl: 'user1.png'
        }
    })
}));

describe('CarDetails Component', () => {
    let dom;

    beforeEach(() => {
      act(() => {
        dom = render(
          <BrowserRouter>
            <AuthProvider>
              <CarDetails />
            </AuthProvider>
          </BrowserRouter>
        );
      });
    });

    afterEach(() => {
      cleanup();
      jest.clearAllMocks();
    });

    it("should display car details", async () => {
      await waitFor(() => {
        expect(dom.container.querySelector(".car-details")).toBeInTheDocument();
        expect(screen.getAllByText("Ford Mustang").length).toBe(2);
        expect(screen.getByText("Year of manufacture: 2022")).toBeInTheDocument();
        expect(screen.getByText("Price per Day: $60")).toBeInTheDocument();
        expect(screen.getByText("Username: User1"));
        expect(screen.getByText("Email: user1@abv.bg"));
        expect(screen.getByAltText("User profile")).toBeInTheDocument();
      });
    });

    it("should allow adding and removing favorites", async () => {
      const addToFavoritesButton = screen.getByText("Add to Favourites");
      expect(addToFavoritesButton).toBeInTheDocument();

      fireEvent.click(addToFavoritesButton);

      await waitFor(() => {
        expect(screen.getByText("Remove from Favourites")).toBeInTheDocument();
      });

      const removeFromFavoritesButton = screen.getByText("Remove from Favourites");
      expect(removeFromFavoritesButton).toBeInTheDocument();

      fireEvent.click(removeFromFavoritesButton);

      await waitFor(() => {
        expect(screen.getByText("Add to Favourites")).toBeInTheDocument();
      });
    });

    it("should render the reviews section", async () => {
      await waitFor(() => {
        expect(screen.getByTestId("reviews")).toBeInTheDocument();
      });
    });

    it("should render the rent form", async () => {
      await waitFor(() => {
        expect(screen.getByTestId("rent-form")).toBeInTheDocument();
      });
    });
});
