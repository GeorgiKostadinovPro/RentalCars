import { cleanup, render, screen } from '@testing-library/react'

import { BrowserRouter } from 'react-router-dom'

import { AuthProvider } from "../../../contexts/AuthContext"

import { ContactForm } from "./ContactForm"

jest.mock('../../../utilities/env', () => ({
    ENV: {}
}));

describe('ContactForm Component', () => {
    let dom;

    beforeEach(() => {
      dom = render(
        <BrowserRouter>
          <AuthProvider>
            <ContactForm />
          </AuthProvider>
        </BrowserRouter>
      );
    });

    afterEach(() => {
        cleanup();
    });

    it("renders component successfully", () => {
      const headings = dom.container.querySelector("div.contact-us");
      expect(headings).toBeInTheDocument();
    });
});