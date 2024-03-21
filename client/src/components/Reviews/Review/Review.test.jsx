import { cleanup, render, screen } from '@testing-library/react'

import { BrowserRouter } from 'react-router-dom'

import { AuthProvider } from "../../../contexts/AuthContext"

import { Review } from "./Review"

const mockReview = {
    rating: 3,
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

    it("renders review with rating successfully", () => {
      const dom = render(
        <BrowserRouter>
          <AuthProvider>
            <Review {...mockReview} />
          </AuthProvider>
        </BrowserRouter>
      );

      expect(dom.container.querySelectorAll(".checked").length).toBe(3);
      expect(screen.getByText(mockReview.author.username)).toBeInTheDocument();
      expect(screen.getByText("Test message")).toBeInTheDocument();
      expect(screen.getByText(mockReview._createdOn)).toBeInTheDocument();
      expect(screen.getByAltText("User profile")).toHaveAttribute("src", mockReview.author.profilePictureUrl);
    });

    it("renders review with author email if username is not available", () => {
        const reviewWithoutUsername = {
          ...mockReview,
          author: {
            email: "testuser@example.com",
            profilePictureUrl: "https://example.com/profilepic.jpg",
          }
        };
        
        render(
            <BrowserRouter>
              <AuthProvider>
                <Review {...reviewWithoutUsername} />
              </AuthProvider>
            </BrowserRouter>
        );

        expect(screen.getByText(reviewWithoutUsername.author.email)).toBeInTheDocument();
    });

    it("renders default profile picture if profilePictureUrl is not available", () => {
      const reviewWithoutProfilePicture = {
        ...mockReview,
        author: {
          username: "testuser",
          email: "testuser@example.com",
        }
      };

      render(
        <BrowserRouter>
          <AuthProvider>
            <Review {...reviewWithoutProfilePicture} />
          </AuthProvider>
        </BrowserRouter>
      );

      expect(screen.getByAltText("User profile")).toHaveAttribute("src", "https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1677509740.jpg");
    });
});