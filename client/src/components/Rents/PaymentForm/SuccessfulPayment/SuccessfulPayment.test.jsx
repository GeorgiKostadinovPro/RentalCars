import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react'

import { BrowserRouter } from 'react-router-dom'

import { AuthProvider } from "../../../../contexts/AuthContext"

import { SuccessfulPayment } from "./SuccessfulPayment"

describe('SuccessfulPayment Component', () => {
    beforeEach(() => {
      render(
        <BrowserRouter>
           <AuthProvider>
            <SuccessfulPayment rentId={'1'} />
          </AuthProvider>
        </BrowserRouter>
      );
    });

    afterEach(() => {
      cleanup();
    });

    it("renders modal with success message", async () => {
      await waitFor(() => {
        expect(screen.getByText("You successfully rented this vehicle.")).toBeInTheDocument();
      });

      expect(screen.getByText("Close")).toBeInTheDocument();
      expect(screen.getByText("See Details")).toBeInTheDocument();
    });

    it('closes modal when "Close" button is clicked', async () => {
      fireEvent.click(screen.getByText("Close"));

      await waitFor(() => {
        expect(screen.queryByText("You successfully rented this vehicle.")).toBeNull();
      });
    });

    it('redirects to rent details page when "See Details" button is clicked', async () => {
      fireEvent.click(screen.getByText("See Details"));

      await waitFor(() => {
        expect(window.location.pathname).toBe("/rents/1/details");
      });
    });
});
