import { act, cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react'

import { BrowserRouter } from 'react-router-dom'

import { AuthProvider } from "../../../contexts/AuthContext"

import { BlogInfo } from "./BlogInfo"

jest.mock("../../../services/postService", () => ({
  getRecent: jest.fn().mockResolvedValue([
    {
      _id: "1",
      title: "Mock Post Title",
      author: { username: "Mock Author" },
      _createdOn: 1614260681375,
    },
    {
      _id: "2",
      title: "Mock Post Title",
      author: { username: "Mock Author" },
      _createdOn: 1614260681375,
    }
  ])
}));

jest.mock("../../../utilities/dateFormatter", () => ({
  dateFormatter: (date) => date
}));

describe('BlogInfo Component', () => {
    let dom;

    beforeEach(async () => {
      await act(async () => {
        dom = render(
          <BrowserRouter>
            <AuthProvider>
              <BlogInfo />
            </AuthProvider>
          </BrowserRouter>
        );
      });
    });

    afterEach(() => {
        cleanup();
        jest.clearAllMocks();
    });

    it("renders blog info successfully", () => {
        const component = dom.container.querySelector('.more-info .section-heading');

        expect(component).not.toBeNull;
    });

    it("renders recent posts", async () => {
        await screen.findAllByText('Mock Post Title');

        expect(dom.container.querySelectorAll('.home-page-recent-post')).toHaveLength(2);
    });

    it('navigates to blog page when read more link is clicked', async () => {
        const blogLink = dom.container.querySelector('.more-info .text-center a.filled-button');

        fireEvent.click(blogLink);

        await waitFor(() => {
            expect(window.location.pathname).toBe('/blog');
        });
    });
});