import { Link, useLocation } from 'react-router-dom'

import { Path } from '../../utilities/Path'
import { useAuthContext } from '../../hooks/useAuthContext'

import { UserInfo } from './UserInfo/UserInfo'
import { UserCreatedCars } from './UserCreatedCars/UserCreatedCars'
import { FavouriteCars } from './FavouriteCars/FavouriteCars'

import './Profile.css'
import { AllCars } from '../Admin/AllCars/AllCars'
import { AllUsers } from '../Admin/AllUsers/AllUsers'
import { AllPosts } from '../Admin/AllPosts/AllPosts'

export const Profile = () => {
    const { pathname } = useLocation();

    const { isAdmin } = useAuthContext();

    const renderComponent = () => {
      switch (pathname) {
        case Path.profile:
          return <UserInfo />;
        case Path.allUserCars:
          return <UserCreatedCars />;
        case Path.favouriteCars:
          return <FavouriteCars />;
        case Path.allUsers:
          return <AllUsers />;
        case Path.allCars:
          return <AllCars />;
        case Path.allPosts:
          return <AllPosts />;
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
              <li className="nav-item dropdown">
                <a
                  className="dropdown-toggle nav-link"
                  data-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Manage
                </a>
                <div className="dropdown-menu">
                  <Link to={Path.allUsers} className="dropdown-item">
                    Users
                  </Link>
                  <Link to={Path.allCars} className="dropdown-item">
                    Cars
                  </Link>
                  <Link to={Path.allPosts} className="dropdown-item">
                    Posts
                  </Link>
                </div>
              </li>
            )}
          </ul>
        </div>

        {renderComponent()}
      </>
    );
}