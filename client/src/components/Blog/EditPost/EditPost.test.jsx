import { act, cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react'

import { BrowserRouter } from 'react-router-dom'

import { AuthProvider } from "../../../contexts/AuthContext"

import { EditPost } from "./EditPost"

jest.mock('../../../services/cloudinaryService', () => ({
  uploadFile: jest.fn().mockResolvedValue({ url: 'mockUrl', publicId: 'mockPublicId' })
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
    }),
    editPost: jest.fn().mockResolvedValue({})
}));

describe('EditPost Component', () => {
    let dom;

    beforeEach(() => {
      act(() => {
        dom = render(
          <BrowserRouter>
            <AuthProvider>
              <EditPost />
            </AuthProvider>
          </BrowserRouter>
        );
      });
    });

    afterEach(() => {
      cleanup();
      jest.clearAllMocks();
    });

    it('renders the form with pre-populated data upon inital render successfully', async () => {
        await waitFor(() => {
            expect(screen.getByDisplayValue('Post 1')).toBeInTheDocument();
            expect(screen.getByDisplayValue('Post 1 Content')).toBeInTheDocument();
            expect(screen.getByDisplayValue('car,fast,sport')).toBeInTheDocument();
        });
    });

    // it('submit form with valid data', async () => {
    //   fireEvent.change(dom.container.querySelector('input[name="title"]'), { target: { value: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' } });
    //   fireEvent.change(dom.container.querySelector('input[name="tags"]'), { target: { value: 'test' } });
    //   fireEvent.change(dom.container.querySelector('textarea[name="content"]'), { target: { value: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' } });

    //   const file = new File(['image'], 'image.png', { type: 'image/png' });

    //   const imageInput = dom.container.querySelector('input[name="image"]');

    //   await waitFor(() =>
    //     fireEvent.change(imageInput, {
    //       target: { files: [file] }
    //     })
    //   );
  
    //   act(() => {
    //     fireEvent.click(screen.getByText('Create'));
    //   });
  
    //   expect(imageInput.files[0].name).toBe("image.png");
    // });

    // it('does NOT submit the form with invalid title, tags or content length', async () => {
    //   fireEvent.change(dom.container.querySelector('input[name="title"]'), { target: { value: 'Test' } });
    //   fireEvent.change(dom.container.querySelector('input[name="tags"]'), { target: { value: 'Te' } });
    //   fireEvent.change(dom.container.querySelector('textarea[name="content"]'), { target: { value: 'Test' } });

    //   fireEvent.click(screen.getByText('Create'));
  
    //   await waitFor(() => {
    //     expect(screen.getByText('The title should be at least 50 symbols long!')).toBeInTheDocument();
    //     expect(screen.getByText('Please enter at least 1 tag!')).toBeInTheDocument();
    //     expect(screen.getByText('The content should be at least 100 symbols long!')).toBeInTheDocument();
    //   });
    // });
});