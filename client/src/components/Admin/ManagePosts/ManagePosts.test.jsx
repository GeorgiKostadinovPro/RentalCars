import { act, cleanup, render, screen, waitFor } from '@testing-library/react'

import { BrowserRouter } from 'react-router-dom'

import { AuthProvider } from "../../../contexts/AuthContext"

import { ManagePosts } from "./ManagePosts"

jest.mock("../../../services/postService", () => ({
  getForAdmin: jest.fn().mockResolvedValue([
    {
        _id: "1",
        title: "Post1",
        createdOn: new Date().toISOString()
    },
    {
        _id: "2",
        title: "Post2",
        createdOn: new Date().toISOString()
    }
  ])
}));

describe('ManagePosts Component', () => {
    beforeEach(() => {
      act(() => {
        render(
          <BrowserRouter>
            <AuthProvider>
              <ManagePosts />
            </AuthProvider>
          </BrowserRouter>
        );
      });
    });

    afterEach(() => {
      cleanup();
      jest.clearAllMocks();
    });

    it("renders manage posts correctly", async () => {
      await waitFor(() => {
        expect(screen.getByText("Manage")).toBeInTheDocument();
        expect(screen.getByText("Add New Post")).toBeInTheDocument();

        expect(screen.queryAllByRole("row")).toHaveLength(3);
        
        expect(screen.getByText("Post1...")).toBeInTheDocument();
        expect(screen.getByText("Post2...")).toBeInTheDocument();
      });
    });

    it('is not rendering modal when postIdToDelete is set', () => {
      expect(screen.queryByText('Are you sure?')).toBeNull();
      expect(screen.queryByText('This action cannot be undone.')).toBeNull();
  
      expect(screen.queryByText('Close')).toBeNull();
      expect(screen.queryByText('Delete')).toBeNull();
    });
});