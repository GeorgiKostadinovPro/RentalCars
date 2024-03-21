import { cleanup, fireEvent, render, screen } from '@testing-library/react'

import { BrowserRouter } from 'react-router-dom'

import { AuthProvider } from "../../contexts/AuthContext"

import { Filter } from "./Filter"

describe('Filter Component', () => {
    let dom;

    let handleFilterSubmit;

    beforeEach(() => {
      handleFilterSubmit = jest.fn();

      dom = render(
        <BrowserRouter>
          <AuthProvider>
            <Filter
              handleFilterSubmit={handleFilterSubmit}
            />
          </AuthProvider>
        </BrowserRouter>
      );
    });

    afterEach(() => {
      cleanup();
      jest.clearAllMocks();
    });

    it("renders filter inputs", () => {
      expect(screen.getByPlaceholderText("Type anything...")).toBeInTheDocument();
      expect(screen.getByText("Search")).toBeInTheDocument();
      expect(screen.getByText("Sort")).toBeInTheDocument();
    });
});