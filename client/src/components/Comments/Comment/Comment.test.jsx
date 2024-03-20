import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react'

import { BrowserRouter } from 'react-router-dom'

import { AuthProvider } from "../../../contexts/AuthContext"

import { Comment } from "./Comment"

const mockComment = {
    message: 'Test message',
    _createdOn: new Date().toISOString(),
    author: {
      username: 'testuser',
      email: 'testuser@example.com',
      profilePictureUrl: 'https://example.com/profilepic.jpg',
    }
};

jest.mock('../../../utilities/dateFormatter', () => ({
  dateFormatter: (date) => date
}));

describe('Comment Component', () => {
    afterEach(() => {
        cleanup();
        jest.clearAllMocks();
    });

    it("renders comment with author username and formatted date", () => {
      render(
        <BrowserRouter>
          <AuthProvider>
            <Comment {...mockComment} />
          </AuthProvider>
        </BrowserRouter>
      );

      expect(screen.getByText(mockComment.author.username)).toBeInTheDocument();
      expect(screen.getByText("Test message")).toBeInTheDocument();
      expect(screen.getByText(mockComment._createdOn)).toBeInTheDocument();
      expect(screen.getByAltText("User profile")).toHaveAttribute("src", mockComment.author.profilePictureUrl);
    });

    it("renders comment with author email if username is not available", () => {
        const commentWithoutUsername = {
          ...mockComment,
          author: {
            email: "testuser@example.com",
            profilePictureUrl: "https://example.com/profilepic.jpg",
          }
        };
        
        render(
            <BrowserRouter>
              <AuthProvider>
                <Comment {...commentWithoutUsername} />
              </AuthProvider>
            </BrowserRouter>
        );

        expect(screen.getByText(commentWithoutUsername.author.email)).toBeInTheDocument();
    });

    it("renders default profile picture if profilePictureUrl is not available", () => {
      const commentWithoutProfilePicture = {
        ...mockComment,
        author: {
          username: "testuser",
          email: "testuser@example.com",
        }
      };

      render(
        <BrowserRouter>
          <AuthProvider>
            <Comment {...commentWithoutProfilePicture} />
          </AuthProvider>
        </BrowserRouter>
      );

      expect(screen.getByAltText("User profile")).toHaveAttribute("src", "https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1677509740.jpg");
    });
});