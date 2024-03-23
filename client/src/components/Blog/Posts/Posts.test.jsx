import { act, cleanup, render, screen, waitFor } from '@testing-library/react'

import { BrowserRouter } from 'react-router-dom'

import { AuthProvider } from "../../../contexts/AuthContext"

import { Posts } from "./Posts"

jest.mock("../../../services/postService", () => ({
  getAll: jest.fn().mockResolvedValue([
    {
      _id: "1",
      title: "Post 1",
      content: "Post 1 Content",
      image: { url: "post1.png", publicId: "post1" },
      author: { username: "User1" },
      _createdOn: new Date().toISOString(),
    },
    {
      _id: "2",
      title: "Post 2",
      content: "Post 2 Content",
      image: { url: "post2.png", publicId: "post2" },
      author: { username: "User2" },
      _createdOn: new Date().toISOString(),
    }
  ]),
  getPostsCount: jest.fn().mockResolvedValue(2)
}));

describe('Posts Component', () => {
    beforeEach(() => {
      act(() => {
        render(
          <BrowserRouter>
            <AuthProvider>
              <Posts />
            </AuthProvider>
          </BrowserRouter>
        );
      });
    });

    afterEach(() => {
      cleanup();
      jest.clearAllMocks();
    });

    it("displays fetched posts", async () => {
      await waitFor(() => {
        expect(screen.getByText("Post 1")).toBeInTheDocument();
        expect(screen.getByText("Post 2")).toBeInTheDocument();
      });
    });

    it('displays pagination', async () => {
        const pageButtons = screen.getAllByTestId('change-page');
        expect(pageButtons.length).toBe(1);
    });
});