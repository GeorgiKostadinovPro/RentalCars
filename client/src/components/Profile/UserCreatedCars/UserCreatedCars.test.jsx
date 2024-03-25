import { act, cleanup, render, screen, waitFor } from '@testing-library/react'

import { BrowserRouter } from 'react-router-dom'

import { AuthProvider } from "../../../contexts/AuthContext"

import { UserCreatedCars } from "./UserCreatedCars"

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
    getUserCars: jest.fn(),
    deleteCarSubmitHandler: jest.fn(),
    carIdToDelete: null,
    setCarIdToDeleteHandler: jest.fn(),
  })
}));

describe('UserInfo Component', () => {
    beforeEach(() => {
      act(() => {
        render(
          <BrowserRouter>
            <AuthProvider>
              <UserCreatedCars />
            </AuthProvider>
          </BrowserRouter>
        );
      });
    });

    afterEach(() => {
      cleanup();
      jest.clearAllMocks();
    });

    it("renders user created cars correctly", async () => {
      await waitFor(() => {
        expect(screen.getByText("Manage")).toBeInTheDocument();
        expect(screen.getByText("Add New Car")).toBeInTheDocument();

        expect(screen.queryAllByRole("row")).toHaveLength(3);
        expect(screen.getByText("Toyota")).toBeInTheDocument();
        expect(screen.getByText("Corolla")).toBeInTheDocument();
        expect(screen.getByText("2020")).toBeInTheDocument();

        expect(screen.getByText("Honda")).toBeInTheDocument();
        expect(screen.getByText("Civic")).toBeInTheDocument();
        expect(screen.getByText("2019")).toBeInTheDocument();
      });
    });
});