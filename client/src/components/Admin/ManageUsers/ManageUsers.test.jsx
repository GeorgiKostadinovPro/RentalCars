import { act, cleanup, render, screen, waitFor } from '@testing-library/react'

import { BrowserRouter } from 'react-router-dom'

import { AuthProvider } from "../../../contexts/AuthContext"

import { ManageUsers } from "./ManageUsers"

jest.mock("../../../services/userService", () => ({
  getAll: jest.fn().mockResolvedValue([
    {
        _id: '1',
        username: 'User1',
        email: 'user1@abv.bg',
        _createdOn: new Date().toISOString()
    },
    {
        _id: '2',
        username: 'User2',
        email: 'user2@abv.bg',
        _createdOn: new Date().toISOString()
    }
  ])
}));

describe('ManageUsers Component', () => {
    beforeEach(() => {
      act(() => {
        render(
          <BrowserRouter>
            <AuthProvider>
              <ManageUsers />
            </AuthProvider>
          </BrowserRouter>
        );
      });
    });

    afterEach(() => {
      cleanup();
      jest.clearAllMocks();
    });

    it("renders manage users correctly", async () => {
      await waitFor(() => {
        expect(screen.getByText("Manage")).toBeInTheDocument();

        expect(screen.queryAllByRole("row")).toHaveLength(3);
        
        expect(screen.getByText("User1")).toBeInTheDocument();
        expect(screen.getByText("user1@abv.bg")).toBeInTheDocument();

        expect(screen.getByText("User2")).toBeInTheDocument();
        expect(screen.getByText("user2@abv.bg")).toBeInTheDocument();
      });
    });
});