import { act, cleanup, render, screen, waitFor } from '@testing-library/react'

import { BrowserRouter } from 'react-router-dom'

import { AuthProvider } from "../../../contexts/AuthContext"

import { PostDetails } from "./PostDetails"

jest.mock('../../../utilities/dateFormatter', () => ({
    dateFormatter: (date) => date
}));

jest.mock('../../Comments/Comments', () => ({
    Comments: () => {
        return <mock-comments />;
    }
}));

jest.mock('../../Comments/CreateComment/CreateComment', () => ({
    CreateComment: () => {
        return <mock-create-comment />;
    }
}));

jest.mock('../../../services/postService', () => ({
    getById: jest.fn().mockResolvedValue({
        _id: "1",
        title: "Post 1",
        content: 'Post 1 Content',
        tags: ['car', 'fast', 'sport'],
        image: { 
            url: 'post1.png', 
            publicId: 'post1' 
        },
        author: { 
            username: "User1" 
        },
        _createdOn: new Date().toISOString()
    })
}));

describe('PostDetails Component', () => {
    let dom;

    beforeEach(() => {
      act(() => {
        dom = render(
          <BrowserRouter>
            <AuthProvider>
              <PostDetails />
            </AuthProvider>
          </BrowserRouter>
        );
      });
    });

    afterEach(() => {
      cleanup();
      jest.clearAllMocks();
    });

    it('displays post details when post is successfully retrieved', async () => {
        await waitFor(() => {
            expect(screen.getByText('Post 1')).toBeInTheDocument();
            expect(screen.getByText('Post 1 Content')).toBeInTheDocument();
            expect(dom.container.querySelectorAll('div.post-tags ul li').length).toBe(3);
            expect(screen.getByAltText('Post Picture')).toHaveAttribute('src', 'post1.png');
        });
    });
});