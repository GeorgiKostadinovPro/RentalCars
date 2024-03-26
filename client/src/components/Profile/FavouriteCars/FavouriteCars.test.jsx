import { act, cleanup, render, screen, waitFor } from '@testing-library/react'

import { BrowserRouter } from 'react-router-dom'

import { AuthProvider } from "../../../contexts/AuthContext"

import { FavouriteCars } from "./FavouriteCars"

jest.mock('../../../hooks/useAuthContext', () => ({
    useAuthContext: () => ({
        userId: 'User123'
    })
}));

jest.mock("../../../hooks/useCarsContext", () => ({
  useCarsContext: () => ({
    cars: [
      {
        _id: "1",
        car: {
          make: "Toyota",
          model: "Corolla",
          year: 2020,
          createdOn: new Date().toISOString(),
        }
      },
      {
        _id: "2",
        car: {
          make: "Honda",
          model: "Civic",
          year: 2019,
          createdOn: new Date().toISOString(),
        }
      }
    ],
    getFavouriteCars: jest.fn(),
    deleteFavouriteSubmitHandler: jest.fn(),
    carIdToDelete: "1",
    setCarIdToDeleteHandler: jest.fn(),
  }),
}));

describe('FavouriteCars Component', () => {
    beforeEach(() => {
      act(() => {
        render(
          <BrowserRouter>
            <AuthProvider>
              <FavouriteCars />
            </AuthProvider>
          </BrowserRouter>
        );
      });
    });

    afterEach(() => {
      cleanup();
      jest.clearAllMocks();
    });

    it("renders user favourite cars correctly", async () => {
      await waitFor(() => {
        expect(screen.getByText("Manage")).toBeInTheDocument();

        expect(screen.queryAllByRole("row")).toHaveLength(3);

        expect(screen.getByText("Toyota")).toBeInTheDocument();
        expect(screen.getByText("Corolla")).toBeInTheDocument();
        expect(screen.getByText("2020")).toBeInTheDocument();

        expect(screen.getByText("Honda")).toBeInTheDocument();
        expect(screen.getByText("Civic")).toBeInTheDocument();
        expect(screen.getByText("2019")).toBeInTheDocument();
      });
    });

    it('renders modal when carIdToDelete is set', () => {
      expect(screen.getByText('Are you sure?')).toBeInTheDocument();
      expect(screen.getByText('This action cannot be undone.')).toBeInTheDocument();
  
      expect(screen.getByText('Close')).toBeInTheDocument();
      expect(screen.getByText('Delete')).toBeInTheDocument();
    });
});