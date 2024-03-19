import './About.css'

export const About = () => {
  return (
    <>
      <div className="page-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>About Us</h1>
              <span>We have an excellent team and ambitious goals</span>
            </div>
          </div>
        </div>
      </div>

      <div className="more-info about-info">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="more-info-content">
                <div className="row">
                  <div className="col-md-6 align-self-center">
                    <div className="right-content">
                      <span>We are Rental Cars</span>
                      <h2>
                        Get to know about <em>our company</em>
                      </h2>
                      <p>
                        Based in Sofia, our dynamic team brings a fresh
                        perspective to the world of car rentals. Founded in
                        2024, we may be new, but our commitment to excellence is
                        unwavering. We're here to redefine your car rental
                        experience, offering a diverse fleet and seamless
                        service.
                        <br />
                        <br />
                        Discover the ease of renting with us and embark on
                        journeys with confidence. Welcome to a new era in car
                        rentals.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="left-image">
                      <img src="assets/images/about-1-570x350.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fun-facts">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="left-content">
                <span>Some interesting facts</span>
                <h2>
                  Driving Success: <em>RentalCars in Numbers</em>
                </h2>
                <p>
                  We are operating in the vibrant city of Sofia, providing
                  convenient and accessible car rental solutions. Proudly
                  serving and satisfying 1,280 clients who have chosen
                  RentalCars for their journey, making their experiences
                  memorable.
                  <br />
                  <br />
                  We have a high satisfaction rate with positive feedback,
                  reflecting our dedication to customer happiness and service
                  excellence.
                </p>
              </div>
            </div>
            <div className="col-md-6 align-self-center">
              <div className="row">
                <div className="col-md-6">
                  <div className="count-area-content">
                    <div className="count-digit">100000</div>
                    <div className="count-title">Miles driven</div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="count-area-content">
                    <div className="count-digit">1280</div>
                    <div className="count-title">Happy clients</div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="count-area-content">
                    <div className="count-digit">1</div>
                    <div className="count-title">city</div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="count-area-content">
                    <div className="count-digit">26</div>
                    <div className="count-title">Cars</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="team" style={{ margin: 0 }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h2>
                  Our team <em>members</em>
                </h2>
                <span>
                  A team of professionals proved themselves along the way
                </span>
              </div>
            </div>
            <div className="col-md-4">
              <div className="team-item">
                <img src="assets/images/georgi-profile.jpg" alt="" />
                <div className="down-content">
                  <h4>Georgi Kostadinov</h4>
                  <span>Co-Founder</span>
                  <p>
                    The driving force behind RentalCars, bringing a wealth of
                    expertise and passion to the team.
                  </p>
                  <p>
                    <a data-testid="linkedin-link" href="https://www.linkedin.com/in/georgi-kostadinov-125349241/">
                      <span>
                        <i className="fa fa-linkedin" />
                      </span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}