import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { BrowserRouter } from 'react-router-dom'

import { AuthProvider } from "../../../contexts/AuthContext"

import { Register } from "./Register"

describe('Register Component', () => {
    let dom;

    beforeEach(() => {
        dom = render(
          <BrowserRouter>
            <AuthProvider>
              <Register />
            </AuthProvider>
          </BrowserRouter>
        );
    });

    afterEach(() => {
        cleanup();
    });

    it("renders register form with email, password and confirm password fields", () => {
      const emailInput = dom.container.querySelector('input[name="email"]');
      const passwordInput = dom.container.querySelector('input[name="password"]');
      const confirmPasswordInput = dom.container.querySelector('input[name="confirmPassword"]');

      expect(emailInput).toBeInTheDocument();
      expect(passwordInput).toBeInTheDocument();
      expect(confirmPasswordInput).toBeInTheDocument();
    });

    it("submits the form with valid email and password and redirects to Home", async () => {
      const email = "peter@abv.com";
      const password = "Pt123.";

      const emailInput = dom.container.querySelector('input[name="email"]');
      const passwordInput = dom.container.querySelector('input[name="password"]');
      const confirmPasswordInput = dom.container.querySelector('input[name="confirmPassword"]');

      const submitButton = dom.container.querySelector("#input_submit");

      userEvent.type(emailInput, email);
      userEvent.type(passwordInput, password);
      userEvent.type(confirmPasswordInput, password);

      userEvent.click(submitButton);

      await waitFor(() => {
        expect(window.location.pathname).toBe("/");
      });
    });

    it("should navigate to register page when 'Create your account' is clicked", async () => {
        const loginLink = dom.container.querySelector("#create_account a");
        expect(loginLink).toBeInTheDocument();

        userEvent.click(loginLink);

        await waitFor(() => {
            expect(window.location.pathname).toBe("/login");
        });
    });
});