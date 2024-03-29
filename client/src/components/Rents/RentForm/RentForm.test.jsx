import { act, cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react'

import { BrowserRouter } from 'react-router-dom'

import { AuthProvider } from "../../../contexts/AuthContext"

import { RentForm } from "./RentForm"

jest.mock('../../../hooks/useAuthContext', () => ({
    useAuthContext: () => ({
        email: 'user@abv.bg'
    })
}));

jest.mock('../PaymentForm/PaymentForm', () => ({
    PaymentForm: () => {
        return <mock-payment-form data-testid={'payment-form'} />
    }
}));

jest.mock('../../../services/rentService', () => ({
    checkIfRentIsPossible: jest.fn().mockResolvedValue(true)
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
            "ford1.png",
            "ford1.png"
        ]
    })
}));

describe('RentForm Component', () => {
    let dom;

    beforeEach(() => {
      act(() => {
        dom = render(
          <BrowserRouter>
            <AuthProvider>
              <RentForm />
            </AuthProvider>
          </BrowserRouter>
        );
      });
    });

    afterEach(() => {
      cleanup();
      jest.clearAllMocks();
    });

    it('renders form with default values', async () => {
        await waitFor(() => {
            expect(screen.getByDisplayValue('user@abv.bg')).toBeInTheDocument();
        });
    });

    it('submits the form with valid data', async () => {
        fireEvent.change(dom.container.querySelector('input[name="fullName"]'), { target: { value: 'John Smith' } });
        fireEvent.change(dom.container.querySelector('input[name="pickUpDateAndTime"]'), { target: { value: '2024-03-30T12:00' } });
        fireEvent.change(dom.container.querySelector('input[name="returningDateAndTime"]'), { target: { value: '2024-04-03T12:00' } });

        fireEvent.click(dom.container.querySelector('.rent-btn'));

        await waitFor(() => {
            expect(screen.getByTestId('payment-form')).toBeInTheDocument();
        });
    });

    it('shows error messages for empty data', async () => {
        fireEvent.click(dom.container.querySelector('.rent-btn'));

        await waitFor(() => {
            expect(screen.getAllByText('This field is required!').length).toBe(3);
        });
    });

    it('shows error messages for invalid pick-up date and time', async () => {
        fireEvent.change(dom.container.querySelector('input[name="fullName"]'), { target: { value: 'John Smith' } });
        fireEvent.change(dom.container.querySelector('input[name="pickUpDateAndTime"]'), { target: { value: '2023-03-30T12:00' } });
        fireEvent.change(dom.container.querySelector('input[name="returningDateAndTime"]'), { target: { value: '2024-04-03T12:00' } });

        fireEvent.click(dom.container.querySelector('.rent-btn'));

        await waitFor(() => {
            expect(screen.getByText('Invalid pick-up date and time!')).toBeInTheDocument();
        });
    });

    it('shows error messages for invalid returning date and time', async () => {
        fireEvent.change(dom.container.querySelector('input[name="fullName"]'), { target: { value: 'John Smith' } });
        fireEvent.change(dom.container.querySelector('input[name="pickUpDateAndTime"]'), { target: { value: '2024-03-30T12:00' } });
        fireEvent.change(dom.container.querySelector('input[name="returningDateAndTime"]'), { target: { value: '2024-03-02T12:00' } });

        fireEvent.click(dom.container.querySelector('.rent-btn'));

        await waitFor(() => {
            expect(screen.getByText('Invalid returning date and time! It should be at least one day after pick-up.')).toBeInTheDocument();
        });
    });
});
