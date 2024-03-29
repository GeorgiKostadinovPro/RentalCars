import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react'

import { BrowserRouter } from 'react-router-dom'

import { AuthProvider } from "../../../contexts/AuthContext"

import { PaymentForm } from "./PaymentForm"

jest.mock('@emailjs/browser', () => ({
    send: jest.fn(() => Promise.resolve()),
}));

jest.mock("../../../utilities/env", () => ({
  ENV: {
    emailJS: {
      serviceId: '1',
      rentTemplateId: '1',
      publicKey: '1'
    }
  }
}));

jest.mock('../../../hooks/useAuthContext', () => ({
    useAuthContext: () => ({
        username: 'user1',
        email: 'user@abv.bg'
    })
}));

jest.mock('./SuccessfulPayment/SuccessfulPayment', () => ({
    SuccessfulPayment: () => {
        return <mock-successful-payment data-testid={'successful-payment-form'} />
    }
}));

jest.mock('../../../services/rentService', () => ({
    createRent: jest.fn().mockResolvedValue({
        _id: '1',
        _ownerId: "1",
        carId: "1",
        totalPrice: 240,
        totalDays: 4,
        pickUpDateAndTime: "2024-03-04T15:19",
        returningDateAndTime: "2024-03-08T15:19",
        _createdOn: 1709471995616
    })
}));

describe('PaymentForm Component', () => {
    let dom;

    beforeEach(() => {
      dom = render(
        <BrowserRouter>
          <AuthProvider>
            <PaymentForm
              rentInfo={{
                carId: "1",
                totalPrice: 240,
                totalDays: 4,
                pickUpDateAndTime: "2024-03-04T15:19",
                returningDateAndTime: "2024-03-08T15:19",
                _createdOn: 1709471995616,
              }}
            />
          </AuthProvider>
        </BrowserRouter>
      );
    });

    afterEach(() => {
      cleanup();
      jest.clearAllMocks();
    });

    it('renders form with default values', async () => {
        await waitFor(() => {
            expect(screen.getByText('Payment Summary')).toBeInTheDocument();
        });
    });

    it('submits the form with valid data', async () => {
        fireEvent.change(screen.getByPlaceholderText('Enter card number'), { target: { value: '1234 5678 9012 3456' } });
        fireEvent.change(screen.getByPlaceholderText('MM/YY'), { target: { value: '12/25' } });
        fireEvent.change(screen.getByPlaceholderText('Enter CVC'), { target: { value: '123' } });
        fireEvent.change(screen.getByPlaceholderText('Enter cardholder name'), { target: { value: 'John Smith' } });

        fireEvent.click(screen.getByText('Pay'));

        await waitFor(() => {
            expect(screen.getByTestId('successful-payment-form')).toBeInTheDocument();
        });
    });

    it('shows error messages for empty data', async () => {
        fireEvent.click(screen.getByText('Pay'));

        await waitFor(() => {
            expect(screen.getByText('This field is required!')).toBeInTheDocument();
            expect(screen.getByText('The card number is required!')).toBeInTheDocument();
            expect(screen.getByText('The expiration date is required!')).toBeInTheDocument();
            expect(screen.getByText('The card CVC is required!')).toBeInTheDocument();
        });
    });

    it('shows error messages for invalid card number, expiration date, and CVC', async () => {
        fireEvent.change(screen.getByPlaceholderText('Enter card number'), { target: { value: '1234 5678 9012 123' } });
        fireEvent.change(screen.getByPlaceholderText('MM/YY'), { target: { value: '12/23' } });
        fireEvent.change(screen.getByPlaceholderText('Enter CVC'), { target: { value: '12345' } });
        fireEvent.change(screen.getByPlaceholderText('Enter cardholder name'), { target: { value: 'Jo Smith' } });

        fireEvent.click(screen.getByText('Pay'));

        await waitFor(() => {
            expect(screen.getByText('This full name is invalid!')).toBeInTheDocument();
            expect(screen.getByText('The card number is invalid!')).toBeInTheDocument();
            expect(screen.getByText('The expiration date is invalid!')).toBeInTheDocument();
            expect(screen.getByText('The CVC is invalid!')).toBeInTheDocument();
        });
    });
});
