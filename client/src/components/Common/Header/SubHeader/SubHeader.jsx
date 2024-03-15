import './SubHeader.css'

export const SubHeader = () => {
    return (
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
                    <a data-testid="facebook-link" href="https://www.facebook.com/george.kostadinov.372">
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a data-testid="instagram-link" href="https://www.instagram.com/george.kostadinov.372">
                      <i className="fa fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a data-testid="linkedin-link" href="https://www.linkedin.com/in/georgi-kostadinov-125349241/">
                      <i className="fa fa-linkedin" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    );
}