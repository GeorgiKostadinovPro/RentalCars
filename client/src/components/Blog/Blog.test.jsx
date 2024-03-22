import { act, cleanup, fireEvent, render, screen } from '@testing-library/react'

import { BrowserRouter } from 'react-router-dom'

import { AuthProvider } from "../../contexts/AuthContext"

import { Blog } from "./Blog"

jest.mock('../../utilities/dateFormatter', () => ({
    dateFormatter: (date) => date
}));

jest.mock("./Posts/Posts", () => ({
    __esModule: true,
    Posts: () => {
      return <mock-posts />;
    }
}));

jest.mock("../../services/postService", () => ({
  getRecent: jest.fn().mockResolvedValue([
    {
      _id: "1",
      title: "Post 1",
      author: { username: "User1" },
      _createdOn: new Date().toISOString(),
    },
    {
      _id: "2",
      title: "Post 2",
      author: { username: "User2" },
      _createdOn: new Date().toISOString(),
    },
  ])
}));

describe('Blog Component', () => {
    beforeEach(() => {
      act(() => {
        render(
          <BrowserRouter>
            <AuthProvider>
              <Blog />
            </AuthProvider>
          </BrowserRouter>
        );
      });
    });

    afterEach(() => {
      cleanup();
      jest.clearAllMocks();
    });

    it("renders Blog component without crashing", () => {
        const headingElement = screen.getByText("Read our Blog");
        expect(headingElement).toBeInTheDocument();
    });

    test('fetches and renders recent posts', async () => {
        const postElements = await screen.findAllByRole('listitem');
        expect(postElements).toHaveLength(2);
    
        expect(screen.getByText('Post 1')).toBeInTheDocument();
        expect(screen.getByText('Post 2')).toBeInTheDocument();
    });
});