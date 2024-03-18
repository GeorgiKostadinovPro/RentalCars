import { Link } from 'react-router-dom'

import { Path } from '../../../utilities/Path'

import './Services.css'

export const Services = () => {
  return (
    <div className="offers">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-heading">
              <h2>
                Our <em>Services</em>
              </h2>
              <span>These are the activities our users can do</span>
            </div>
          </div>

          <div className="col-md-4">
            <div className="service-item">
              <div className="down-content">
                <h4>
                  Rent Cars
                </h4>
                <div style={{ marginBottom: 10 }}>
                  <span>
                    the best cars on the market
                  </span>
                </div>
                <hr />
                <p>
                  Feel free to view our catalog of cars and rent the perfect for youself.
                  Don't forget to leave a review as well!
                </p>
                <Link to={Path.cars} className="filled-button">
                  Catalog
                </Link>
              </div>
            </div>
            <br />
          </div>

          <div className="col-md-4">
            <div className="service-item">
              <div className="down-content">
                <h4>
                  Our Blog
                </h4>
                <div style={{ marginBottom: 10 }}>
                  <span>
                    Always exciting posts
                  </span>
                </div>
                <hr />
                <p>
                  View our blog full of interesting posts about the industry. 
                  Feel free to leave a comment and give a like.
                </p>
                <Link to={Path.blog} className="filled-button">
                  Read More
                </Link>
              </div>
            </div>
            <br />
          </div>

          <div className="col-md-4">
            <div className="service-item">
              <div className="down-content">
                <h4>
                  Contact Us
                </h4>
                <div style={{ marginBottom: 10 }}>
                  <span>
                    Always by your side
                  </span>
                </div>
                <hr />
                <p>
                  Don't hesitate to contact with us if you have any questions. We respond immediately!
                </p>
                <Link to={Path.contact} className="filled-button">
                  Contact
                </Link>
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}