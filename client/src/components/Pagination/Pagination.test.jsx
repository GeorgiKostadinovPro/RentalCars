import { cleanup, fireEvent, render, screen } from '@testing-library/react'

import { BrowserRouter } from 'react-router-dom'

import { AuthProvider } from "../../contexts/AuthContext"

import { Pagination } from "./Pagination"

describe('Pagination Component', () => {
    let dom;

    let totalPages;
    let currPage;
    let handlePageChange;

    beforeEach(() => {
      totalPages = 5;
      currPage = 3;
      handlePageChange = jest.fn();

      dom = render(
        <BrowserRouter>
          <AuthProvider>
            <Pagination
              currPage={currPage}
              totalPages={totalPages}
              handlePageChange={handlePageChange}
            />
          </AuthProvider>
        </BrowserRouter>
      );
    });

    afterEach(() => {
      cleanup();
      jest.clearAllMocks();
    });
    
    it('renders pagination with correct number of pages and current page active', () => {
      const pageButtons = screen.getAllByTestId('change-page');
      const activePage = dom.container.querySelector('.change-page.active');
      
      expect(pageButtons.length).toBe(totalPages);
      expect(activePage).not.toBeNull;
    });

    it("clicks on next page button triggers handlePageChange", () => {
      const nextPageButton = screen.getByRole("button", { name: /next/i });

      fireEvent.click(nextPageButton);

      expect(handlePageChange).toHaveBeenCalledWith(currPage + 1);
    });

    it("clicks on previous page button triggers handlePageChange", () => {
      const prevPageButton = screen.getByRole("button", { name: /previous/i });
      
      fireEvent.click(prevPageButton);

      expect(handlePageChange).toHaveBeenCalledWith(currPage - 1);
    });
});