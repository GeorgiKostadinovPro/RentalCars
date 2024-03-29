import { act, cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react'

import { BrowserRouter } from 'react-router-dom'

import { AuthProvider } from "../../../contexts/AuthContext"

import { RentDetails } from "./RentDetails"

jest.mock('../../../utilities/dateFormatter', () => ({
    dateFormatter: (date) => date
}));

jest.mock('../../../services/rentService', () => ({
    getById: jest.fn().mockResolvedValue({
        _id: '1',
        _ownerId: "35c62d76-8152-4626-8712-eeb96381bea8",
        carId: "0",
        totalPrice: 240,
        totalDays: 4,
        pickUpDateAndTime: "2024-03-04T15:19",
        returningDateAndTime: "2024-03-08T15:19",
        _createdOn: 1709471995616,
        author: {
          email: 'user@abv.bg'
        },
        car: {
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
          ]
        }
    })
}));

describe('RentDetails Component', () => {
    let dom;

    beforeEach(() => {
      act(() => {
        dom = render(
          <BrowserRouter>
            <AuthProvider>
              <RentDetails />
            </AuthProvider>
          </BrowserRouter>
        );
      });
    });

    afterEach(() => {
      cleanup();
      jest.clearAllMocks();
    });

    it('renders rent details without crashing', () => {
      expect(screen.getByText('Rent Details')).toBeInTheDocument();
      expect(screen.getByText('The rent details are sent directly to your email address')).toBeInTheDocument();
      expect(screen.getByText('Rent Information')).toBeInTheDocument();
      expect(screen.getByText('Payment')).toBeInTheDocument();
      expect(screen.getByText('Back to Cars')).toBeInTheDocument();
    });

    it('displays correct rent details', async () => {
      await waitFor(() => {
        expect(screen.getByText('car: Ford Mustang')).toBeInTheDocument();
        expect(screen.getByText('year of manufactoring: 2022')).toBeInTheDocument();
        expect(screen.getByText('price per day: $60')).toBeInTheDocument();
        expect(screen.getByText('owner: user@abv.bg')).toBeInTheDocument();
        expect(screen.getByText('Pick-up location: Sofia, Bulgaria')).toBeInTheDocument();
        expect(screen.getByText('Pick-up date: 2024-03-04T15:19')).toBeInTheDocument();
        expect(screen.getByText('Returning date: 2024-03-08T15:19')).toBeInTheDocument();
        expect(screen.getByText('Total days: 4')).toBeInTheDocument();
        expect(screen.getByText('Total price: 4 * $60 = $240')).toBeInTheDocument();
      });
    });
});
