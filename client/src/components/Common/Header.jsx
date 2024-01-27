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
              <a className="navbar-brand" href="index.html">
                <h2>
                  Rental Cars
                </h2>
              </a>
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
                  <li className="nav-item active">
                    <a className="nav-link" href="index.html">
                      Home
                      <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="fleet.html">
                      Cars
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="offers.html">
                      Offers
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
                      <a className="dropdown-item" href="about.html">
                        About Us
                      </a>
                      <a className="dropdown-item" href="blog.html">
                        Blog
                      </a>
                      <a className="dropdown-item" href="team.html">
                        Team
                      </a>
                      <a className="dropdown-item" href="testimonials.html">
                        Testimonials
                      </a>
                      <a className="dropdown-item" href="faq.html">
                        FAQ
                      </a>
                      <a className="dropdown-item" href="terms.html">
                        Terms
                      </a>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="contact.html">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </>
    );
}