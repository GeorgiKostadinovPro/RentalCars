import { cleanup, render, screen } from '@testing-library/react'

import { BrowserRouter } from 'react-router-dom'

import { AuthProvider } from "../../contexts/AuthContext"

import { Profile } from "./Profile"

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useLocation: () => ({
      pathname: "/profile"
    })
}));

jest.mock("../../hooks/useAuthContext", () => ({
    useAuthContext: () => ({
      isAdmin: true
    })
}));

jest.mock('./UserInfo/UserInfo', () => ({
    UserInfo: () => {
        return <mock-user-info />;
    }
}));

jest.mock("./UserCreatedCars/UserCreatedCars", () => ({
  UserCreatedCars: () => {
    return <mock-user-created-cars />;
  }
}));

jest.mock("./FavouriteCars/FavouriteCars", () => ({
  FavouriteCars: () => {
    return <mock-favourite-cars />;
  }
}));

jest.mock("../Admin/ManageCars/ManageCars", () => ({
  ManageCars: () => {
    return <mock-manage-cars />;
  }
}));

jest.mock("../Admin/ManageUsers/ManageUsers", () => ({
  ManageUsers: () => {
    return <mock-manage-users />;
  }
}));

jest.mock("../Admin/ManagePosts/ManagePosts", () => ({
  ManagePosts: () => {
    return <mock-manage-posts />;
  }
}));

describe('Profile Component', () => {
    beforeEach(() => {
      render(
        <BrowserRouter>
          <AuthProvider>
            <Profile />
          </AuthProvider>
        </BrowserRouter>
      );
    });

    afterEach(() => {
      cleanup();
      jest.clearAllMocks();
    });

    it('renders profile page heading', () => {
        const headingElement = screen.getByText('Your Profile');
        expect(headingElement).toBeInTheDocument();
    });

    it("renders profile navigation links", () => {
      const infoLink = screen.getByText("Info");
      const myCarsLink = screen.getByText("My Cars");
      const myFavouritesLink = screen.getByText("My Favourites");

      expect(infoLink).toBeInTheDocument();
      expect(myCarsLink).toBeInTheDocument();
      expect(myFavouritesLink).toBeInTheDocument();
    });

    it("renders manage dropdown for admin users", () => {
      const manageDropdown = screen.getByText("Manage");
      expect(manageDropdown).toBeInTheDocument();

      const manageUsersLink = screen.getByText("Users");
      const manageCarsLink = screen.getByText("Cars");
      const managePostsLink = screen.getByText("Posts");

      expect(manageUsersLink).toBeInTheDocument();
      expect(manageCarsLink).toBeInTheDocument();
      expect(managePostsLink).toBeInTheDocument();
    });
});