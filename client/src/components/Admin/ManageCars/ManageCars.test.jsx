import { act, cleanup, render, screen, waitFor } from '@testing-library/react'

import { BrowserRouter } from 'react-router-dom'

import { AuthProvider } from "../../../contexts/AuthContext"

import { ManageCars } from "./ManageCars"

jest.mock("../../../hooks/useCarsContext", () => ({
  useCarsContext: () => ({
    cars: [
      {
        _id: "1",
        make: "Toyota",
        model: "Corolla",
        year: 2020,
        createdOn: new Date().toISOString()
      },
      {
        _id: "2",
        make: "Honda",
        model: "Civic",
        year: 2019,
        createdOn: new Date().toISOString()
      }
    ],
    getAllCars: jest.fn(),
    deleteCarSubmitHandler: jest.fn(),
    carIdToDelete: '1',
    setCarIdToDeleteHandler: jest.fn(),
  })
}));

describe('ManageCars Component', () => {
    beforeEach(() => {
      act(() => {
        render(
          <BrowserRouter>
            <AuthProvider>
              <ManageCars />
            </AuthProvider>
          </BrowserRouter>
        );
      });
    });

    afterEach(() => {
      cleanup();
      jest.clearAllMocks();
    });

    it("renders manage cars correctly", async () => {
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