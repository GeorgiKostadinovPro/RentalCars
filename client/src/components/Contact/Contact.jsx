import { ContactForm } from "./ContactForm/ContactForm"

import './Contact.css'

export const Contact = () => {
    return (
      <>
        <div className="page-heading header-text">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1>Contact Us</h1>
                <span>feel free to send us a message now!</span>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-information">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="contact-item">
                  <i className="fa fa-phone" />
                  <h4>Phone</h4>
                  <p>
                    Feel free to call us anytime and we will answer your questions.
                  </p>
                  <a href="#">+359 79454529</a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="contact-item">
                  <i className="fa fa-envelope" />
                  <h4>Email</h4>
                  <p>
                    Send us an email and our center will respond as soon as possible.
                  </p>
                  <a href="#">kostadinovgeorgi@gmail.com</a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="contact-item">
                  <i className="fa fa-map-marker" />
                  <h4>Location</h4>
                  <p>
                    bul. Bruksel, 1517 Sofia <br /> Bulgaria
                  </p>
                  <a href="#">View on Google Maps</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ContactForm />
      </>
    );
}