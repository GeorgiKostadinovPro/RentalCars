import { useEffect, useState } from "react"

import { Link } from "react-router-dom"

import NavDropdown from 'react-bootstrap/NavDropdown'
import Dropdown from 'react-bootstrap/Dropdown'

import { Path } from '../../../utilities/Path'
import { useAuthContext } from "../../../hooks/useAuthContext"

import { SubHeader } from "./SubHeader/SubHeader"

import './Header.css'

export const Header = () => {
  const { isUserAuthenticated } = useAuthContext();

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const handleResize = () => {
    if (window.innerWidth > 992) {
      setShowMobileMenu(false);
    }
  };
  
  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
              onClick={toggleMobileMenu}
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

            {showMobileMenu ? (
              <Dropdown.Menu show style={{ marginTop: "40px", width: "100vw", textAlign: "center" }}>
                <Dropdown.Item as={Link} to={Path.home}>Home</Dropdown.Item>
                <Dropdown.Item as={Link} to={Path.cars}>Cars</Dropdown.Item>
                <Dropdown.Item as={Link} to={Path.about}>About Us</Dropdown.Item>
                <Dropdown.Item as={Link} to={Path.blog}>Blog</Dropdown.Item>
                <Dropdown.Item as={Link} to={Path.terms}>Terms</Dropdown.Item>
                <Dropdown.Item as={Link} to={Path.contact}>Contact Us</Dropdown.Item>

                <Dropdown.Divider />

                {!isUserAuthenticated ? (
                    <Dropdown.Item as={Link} to={Path.login}>Login</Dropdown.Item>
                  ) : (
                    <>
                      <Dropdown.Item as={Link} to={Path.profile}>Profile</Dropdown.Item>
                      <Dropdown.Item as={Link} to={Path.logout}>Logout</Dropdown.Item>
                    </>
                )}
              </Dropdown.Menu>
            ) : (
              <div className="collapse navbar-collapse">
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
                  <NavDropdown
                    title="About"
                    menuVariant="light"
                  >
                    <NavDropdown.Item as={Link} to={Path.about}>
                      About us
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to={Path.blog}>
                      Blog
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to={Path.terms}>
                      Terms
                    </NavDropdown.Item>
                  </NavDropdown>
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
            )}
          </div>
        </nav>
      </header>
    </>
  );
}