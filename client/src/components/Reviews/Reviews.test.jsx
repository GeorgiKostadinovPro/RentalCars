import { cleanup, render, screen, waitFor } from '@testing-library/react'

import { BrowserRouter } from 'react-router-dom'

import { AuthProvider } from "../../contexts/AuthContext"

import * as reviewService from '../../services/reviewService'

import { Reviews } from "./Reviews"

describe('Comments Component', () => {
    beforeEach(() => {
      jest.spyOn(reviewService, "getAllByCarId").mockResolvedValue([
        {
          _id: "1",
          rating: 4,
          message: "Test message 1",
          _createdOn: new Date().toISOString(),
          author: {
            username: "testuser",
            email: "testuser@example.com",
            profilePictureUrl: "https://example.com/profilepic.jpg",
          },
        },
        {
          _id: "2",
          rating: 5,
          message: "Test message 2",
          _createdOn: new Date().toISOString(),
          author: {
            username: "testuser",
            email: "testuser@example.com",
            profilePictureUrl: "https://example.com/profilepic.jpg",
          },
        },
      ]);

      jest.spyOn(reviewService, "getReviewsCountByCarId").mockResolvedValue(2);
      jest.spyOn(reviewService, "getAverageRatingByCarId").mockResolvedValue(4.5);

      render(
        <BrowserRouter>
          <AuthProvider>
            <Reviews carId={"1"} />
          </AuthProvider>
        </BrowserRouter>
      );
    });

    afterEach(() => {
      cleanup();
      jest.clearAllMocks();
    });

    test("renders reviews correctly", async () => {
      await waitFor(() => {
        expect(reviewService.getAllByCarId).toHaveBeenCalledWith("1", 0, 1);
        expect(screen.getByText("Test message 1")).toBeInTheDocument();
        expect(screen.getByText("Test message 2")).toBeInTheDocument();
      });
    });

    test("renders no reviews message when there are no reviews", async () => {
      jest.spyOn(reviewService, "getAllByCarId").mockResolvedValue([]);

      await waitFor(() => {
        expect(reviewService.getAllByCarId).toHaveBeenCalledWith("1", 0, 1);
        expect(screen.getByText("No reviews yet.")).toBeInTheDocument();
      });
    });
});