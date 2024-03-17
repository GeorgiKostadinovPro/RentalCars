import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { BrowserRouter } from 'react-router-dom'

import { AuthProvider } from "../../../contexts/AuthContext"

import { Login } from "./Login"

describe('Login Component', () => {
    let dom;

    beforeEach(() => {
        dom = render(
          <BrowserRouter>
            <AuthProvider>
              <Login />
            </AuthProvider>
          </BrowserRouter>
        );
    });

    afterEach(() => {
        cleanup();
    });

    it("renders login form with email and password fields", () => {
      const emailInput = dom.container.querySelector('input[name="email"]');
      const passwordInput = dom.container.querySelector('input[name="password"]');

      expect(emailInput).toBeInTheDocument();
      expect(passwordInput).toBeInTheDocument();
    });
    
    it("submits the form with valid email and password and redirects to Home", async () => {
      const email = "peter@abv.com";
      const password = "Pt123.";

      const emailInput = dom.container.querySelector('input[name="email"]');
      const passwordInput = dom.container.querySelector('input[name="password"]');
      const submitButton = dom.container.querySelector("#input_submit");
      
      userEvent.type(emailInput, email);
      userEvent.type(passwordInput, password);

      userEvent.click(submitButton);

      await waitFor(() => {
        expect(window.location.pathname).toBe("/");
      });
    });

    it("should display errors when form is submitted with empty email or password", async () => {
      const submitButton = dom.container.querySelector("#input_submit");

      fireEvent.click(submitButton);

      const spans = await screen.findAllByText("This field is required!");
      
      expect(spans.length).toEqual(2);
    });

    it("should display error when email is invalid", async () => {
      const email = "peterabv.com";

      const emailInput = dom.container.querySelector('input[name="email"]');

      userEvent.type(emailInput, email);

      await waitFor(() => {
        const invalidSpan = screen.getByText("This email is invalid!");
        expect(invalidSpan.textContent).toEqual("This email is invalid!");
      });
    });

    it("should display error when password's length is invalid", async () => {
      const passwordInput = dom.container.querySelector('input[name="password"]');

      userEvent.type(passwordInput, "123");

      await waitFor(() => {
        const invalidSpan = screen.getByText("The minimal length is 5!");
        expect(invalidSpan.textContent).toEqual("The minimal length is 5!");
      });
    });

    it("should display error when password's pattern is invalid", async () => {
      const passwordInput = dom.container.querySelector('input[name="password"]');

      userEvent.type(passwordInput, "Pass123");

      await waitFor(() => {
        const invalidSpan = screen.getByText("This password is invalid!");
        expect(invalidSpan.textContent).toEqual("This password is invalid!");
      });
    });

    it("should navigate to register page when 'Create your account' is clicked", async () => {
        const registerLink = dom.container.querySelector("#create_account a");
        expect(registerLink).toBeInTheDocument();

        userEvent.click(registerLink);

        await waitFor(() => {
            expect(window.location.pathname).toBe("/register");
        });
    });
});