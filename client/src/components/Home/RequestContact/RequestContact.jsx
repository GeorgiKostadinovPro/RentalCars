import { Link } from 'react-router-dom'

import { Path } from '../../../utilities/Path'

import './RequestContact.css'

export const RequestContact = () => {
    return (
        <div className="request-form">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <h4>Request a call back right now ?</h4>
                <span>
                  Contact us by filling out our contact form and we will connect with you as soon as possible.
                </span>
              </div>
              <div className="col-md-4">
                <Link to={Path.contact} className="border-button">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
    );
}