import { Link } from "react-router-dom"

import { Path } from "../../../utilities/Path"

import './Footer.css'

export const Footer = () => {
    return (
      <>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-md-3 footer-item">
                <h4>Rental Cars</h4>
                <p>
                    Choose from our wide range of vehicles, select the dates that suit you best, and get ready to hit the road with confidence. 
                </p>
                <ul className="social-icons">
                  <li>
                    <a rel="nofollow" href="https://www.facebook.com/george.kostadinov.372" target="_blank">
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/george.kostadinov.372">
                      <i className="fa fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/georgi-kostadinov-125349241/">
                      <i className="fa fa-linkedin" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 footer-item">
                <h4>Our Car Army</h4>
                <ul className="menu-list">
                  <li>
                    <Link to={Path.cars}>
                      Cars for rent
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 footer-item">
                <h4>Additional Info</h4>
                <ul className="menu-list">
                  <li>
                    <Link to={Path.about}>
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to={Path.blog}>
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link to={Path.contact}>
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link to={Path.terms}>
                      Terms
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 footer-item last-item">
                <h4>Contact Us</h4>
                <div className="contact-form">
                  <form id="contact footer-contact" action="" method="post">
                    <div className="row">
                      <div className="col-lg-12 col-md-12 col-sm-12">
                        <fieldset>
                          <input
                            name="name"
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Full Name"
                            required=""
                          />
                        </fieldset>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12">
                        <fieldset>
                          <input
                            name="email"
                            type="text"
                            className="form-control"
                            id="email"
                            pattern="[^ @]*@[^ @]*"
                            placeholder="E-Mail Address"
                            required=""
                          />
                        </fieldset>
                      </div>
                      <div className="col-lg-12">
                        <fieldset>
                          <textarea
                            name="message"
                            rows={6}
                            className="form-control"
                            id="message"
                            placeholder="Your Message"
                            required=""
                            defaultValue={""}
                          />
                        </fieldset>
                      </div>
                      <div className="col-lg-12">
                        <fieldset>
                          <button
                            type="submit"
                            id="form-submit"
                            className="filled-button"
                          >
                            Send Message
                          </button>
                        </fieldset>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div className="sub-footer">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <p>
                  Copyright © 2024 Rentals Cars - by Georgi Kostadinov
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}