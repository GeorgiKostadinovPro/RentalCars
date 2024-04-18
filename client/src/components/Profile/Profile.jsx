import { Link, useLocation } from 'react-router-dom'

import NavDropdown from 'react-bootstrap/NavDropdown'

import { Path } from '../../utilities/Path'
import { useAuthContext } from '../../hooks/useAuthContext'

import { UserInfo } from './UserInfo/UserInfo'
import { UserCreatedCars } from './UserCreatedCars/UserCreatedCars'
import { FavouriteCars } from './FavouriteCars/FavouriteCars'

import { ManageCars } from '../Admin/ManageCars/ManageCars'
import { ManageUsers } from '../Admin/ManageUsers/ManageUsers'
import { ManagePosts } from '../Admin/ManagePosts/ManagePosts'

import './Profile.css'

export const Profile = () => {
    const { pathname } = useLocation();

    const { isAdmin } = useAuthContext();

    const renderProfileSection = () => {
      switch (pathname) {
        case Path.profile:
          return <UserInfo />;
        case Path.allUserCars:
          return <UserCreatedCars />;
        case Path.favouriteCars:
          return <FavouriteCars />;
        case Path.ManageUsers:
          return <ManageUsers />;
        case Path.ManageCars:
          return <ManageCars />;
        case Path.ManagePosts:
          return <ManagePosts />;
      }
    }

    return (
      <>
        <div className="page-heading header-text">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1>Your Profile</h1>
                <span>This is your personal profile page</span>
              </div>
            </div>
          </div>
        </div>

        <div className="profile-nav-bar">
          <ul>
            <li>
              <Link to={Path.profile}>Info</Link>
            </li>
            <li>
              <Link to={Path.allUserCars}>My Cars</Link>
            </li>
            <li>
              <Link to={Path.favouriteCars}>My Favourites</Link>
            </li>

            {isAdmin && (
              <NavDropdown
                id="nav-dropdown-dark-example"
                title="Manage"
                menuVariant="light"
              >
                <NavDropdown.Item as={Link} to={Path.ManageUsers}>
                  Users
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={Path.ManageCars}>
                  Cars
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={Path.ManagePosts}>
                  Posts
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </ul>
        </div>

        {renderProfileSection()}
      </>
    );
}