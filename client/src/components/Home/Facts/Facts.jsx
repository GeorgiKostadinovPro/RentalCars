import { Link } from 'react-router-dom'

import { Path } from '../../../utilities/Path'

import './Facts.css'

export const Facts = () => {
    return (
        <div className="fun-facts">
          <div className="container">
            <div className="more-info-content">
              <div className="row">
                <div className="col-md-6">
                  <div className="left-image">
                    <img
                      src="assets/images/about-1-570x350.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-md-6 align-self-center">
                  <div className="right-content">
                    <span>Who we are</span>
                    <h2>
                      Get to know about <em>our company</em>
                    </h2>
                    <p>
                      Whether you're embarking on a road trip, need a reliable vehicle for a business meeting, 
                      or simply seeking the freedom to explore a new city, we've got you covered.
                    </p>
                    <Link to={Path.about} className="filled-button">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
}