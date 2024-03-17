import { Link } from "react-router-dom"

import { Path } from '../../../utilities/Path'
import { useAuthContext } from "../../../hooks/useAuthContext"

import { SubHeader } from "./SubHeader/SubHeader"

import './Header.css'

export const Header = () => {
  const { isUserAuthenticated } = useAuthContext();

  return (
    <>
      <SubHeader />

      <header>
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <Link to={Path.home} className="navbar-brand">
              <h2>Rental Cars</h2>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={Path.home} className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={Path.cars} className="nav-link">
                    Cars
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="dropdown-toggle nav-link"
                    data-toggle="dropdown"
                    href="#"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    About
                  </a>
                  <div className="dropdown-menu">
                    <Link to={Path.about} className="dropdown-item">
                      About Us
                    </Link>
                    <Link to={Path.blog} className="dropdown-item">
                      Blog
                    </Link>
                    <Link to={Path.terms} className="dropdown-item">
                      Terms
                    </Link>
                  </div>
                </li>
                <li className="nav-item">
                  <Link to={Path.contact} className="nav-link">
                    Contact Us
                  </Link>
                </li>
                {!isUserAuthenticated ? (
                  <li className="nav-item">
                    <Link to={Path.login} className="nav-link">
                      Login
                    </Link>
                  </li>
                ) : (
                  <>
                    <li className="nav-item">
                      <Link to={Path.profile} className="nav-link">
                        Profile
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to={Path.logout} className="nav-link">
                        Logout
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}