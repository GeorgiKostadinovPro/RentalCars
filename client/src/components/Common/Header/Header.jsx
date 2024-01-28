import { Link } from "react-router-dom"
import { Path } from '../../../utilities/Path'

import './Header.css'

export const Header = () => {
    return (
      <>
        <div className="sub-header">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-xs-12">
                <ul className="left-info">
                  <li>
                    <a href="#">
                      <i className="fa fa-envelope" />
                      kostadinovgeorgi16@gmail.com
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-phone" />
                      +359-879454529
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <ul className="right-icons">
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-linkedin" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <header className="">
          <nav className="navbar navbar-expand-lg">
            <div className="container">
              <Link to={Path.home} className="navbar-brand">
                <h2>
                  Rental Cars
                </h2>
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
                    <a className="nav-link" href="fleet.html">
                      Cars
                    </a>
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
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </>
    );
}