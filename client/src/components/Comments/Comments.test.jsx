import { cleanup, render, screen, waitFor } from '@testing-library/react'

import { BrowserRouter } from 'react-router-dom'

import { AuthProvider } from "../../contexts/AuthContext"

import * as commentService from '../../services/commentService'

import { Comments } from "./Comments"

describe('Comments Component', () => {
    beforeEach(() => {
      jest.spyOn(commentService, "getAllByPostId").mockResolvedValue([
        {
          _id: "1",
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
          message: "Test message 2",
          _createdOn: new Date().toISOString(),
          author: {
            username: "testuser",
            email: "testuser@example.com",
            profilePictureUrl: "https://example.com/profilepic.jpg",
          },
        },
      ]);

      jest.spyOn(commentService, "getCountByPostId").mockResolvedValue(2);

      render(
        <BrowserRouter>
          <AuthProvider>
            <Comments postId={"1"} state={{}} />
          </AuthProvider>
        </BrowserRouter>
      );
    });

    afterEach(() => {
      cleanup();
      jest.clearAllMocks();
    });

    it("renders comments correctly", async () => {
      await waitFor(() => {
        expect(commentService.getAllByPostId).toHaveBeenCalledWith("1", 0, 2);
        expect(screen.getByText("Comments (2)")).toBeInTheDocument();
        expect(screen.getByText("Test message 1")).toBeInTheDocument();
        expect(screen.getByText("Test message 2")).toBeInTheDocument();
      });
    });

    it("renders no comments message when there are no comments", async () => {
      jest.spyOn(commentService, "getAllByPostId").mockResolvedValue([]);

      await waitFor(() => {
        expect(commentService.getAllByPostId).toHaveBeenCalledWith("1", 0, 2);
        expect(screen.getByText("No comments yet.")).toBeInTheDocument();
      });
    });
});