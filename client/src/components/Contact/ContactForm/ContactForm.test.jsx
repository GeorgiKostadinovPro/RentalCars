import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react'

import { BrowserRouter } from 'react-router-dom'

import { AuthProvider } from "../../../contexts/AuthContext"

import { ContactForm } from "./ContactForm"

jest.mock("../../../utilities/env", () => ({
  ENV: { 
    emailJS: { 
      serviceId: "1", 
      contactTemplateId: "1", 
      publicKey: "1" 
    } 
  }
}));

jest.mock('@emailjs/browser', () => ({
  send: jest.fn(() => Promise.resolve())
}));

jest.spyOn(window, 'alert').mockImplementation(() => {});

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
        jest.clearAllMocks();
    });

    it("renders component successfully", () => {
      const headings = dom.container.querySelector("div.contact-us");
      expect(headings).toBeInTheDocument();
    });

    it('submits the form successfully and resets', async () => {
      const nameInput = screen.getByPlaceholderText('Full Name');
      const emailInput = screen.getByPlaceholderText('E-Mail Address');
      const subjectInput = screen.getByPlaceholderText('Subject');
      const messageInput = screen.getByPlaceholderText('Your Message');
      const submitButton = screen.getByText('Send Message');
  
      fireEvent.change(nameInput, { target: { value: 'John Doe' } });
      fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
      fireEvent.change(subjectInput, { target: { value: 'Test Subject' } });
      fireEvent.change(messageInput, { target: { value: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' } });
  
      fireEvent.click(submitButton);
  
      await waitFor(() => {
        expect(nameInput).toHaveValue('');
        expect(emailInput).toHaveValue('');
        expect(subjectInput).toHaveValue('');
        expect(messageInput).toHaveValue('');
      });
    });

    it('validates input fields and shows error messages', async () => {
      const submitButton = screen.getByText('Send Message');

      fireEvent.click(submitButton);
  
      await waitFor(() => {
        expect(screen.getAllByText('This field is required!').length).toBe(2);
        expect(screen.getByText('Please write a valid subject!')).toBeInTheDocument();
        expect(screen.getByText('Please write a valid message!')).toBeInTheDocument();
      });
    });
});