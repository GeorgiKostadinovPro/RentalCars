import { Link, useLocation } from 'react-router-dom'

import { Path } from '../../utilities/Path'

import './Profile.css'
import { UserInfo } from './UserInfo/UserInfo';
import { UserCreatedCars } from './UserCreatedCars/UserCreatedCars';
import { FavouriteCars } from './FavouriteCars/FavouriteCars';

export const Profile = () => {
    const { pathname } = useLocation();

    const renderComponent = () => {
      switch (pathname) {
        case '/profile':
          return <UserInfo />;
        case '/profile/myCars':
          return <UserCreatedCars />;
        case '/profile/favouriteCars':
          return <FavouriteCars />;
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
              <Link to={Path.home}>Home</Link>
            </li>
            <li>
              <Link to={Path.allUserCars}>My Cars</Link>
            </li>
            <li>
              <Link to={Path.favouriteCars}>My Favourites</Link>
            </li>
          </ul>
        </div>

        {renderComponent()}
      </>
    );
}