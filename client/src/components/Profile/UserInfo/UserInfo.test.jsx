import { act, cleanup, render, screen, waitFor } from '@testing-library/react'

import { BrowserRouter } from 'react-router-dom'

import { AuthProvider } from "../../../contexts/AuthContext"

import { UserInfo } from "./UserInfo"

jest.mock('../../../services/userService', () => ({
    getUser: jest.fn().mockResolvedValue({
        username: 'User',
        email: 'user@abv.bg',
        profilePictureUrl: 'user.png'
    })
}));

describe('UserInfo Component', () => {
    beforeEach(() => {
      act(() => {
        render(
          <BrowserRouter>
            <AuthProvider>
              <UserInfo />
            </AuthProvider>
          </BrowserRouter>
        );
      });
    });

    afterEach(() => {
      cleanup();
      jest.clearAllMocks();
    });

    it("renders user info correctly", async () => {
      await waitFor(() => {
        expect(screen.getByText("Username: User")).toBeInTheDocument();
        expect(screen.getByText("Email: user@abv.bg")).toBeInTheDocument();
        expect(screen.getByAltText("User profile")).toHaveAttribute(
          "src",
          "user.png"
        );
      });
    });
});