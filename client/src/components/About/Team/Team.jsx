import './Team.css'

export const Team = () => {
    return (
      <div className="team" style={{ margin: 0 }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h2>
                  Our team <em>members</em>
                </h2>
                <span>A team of professionals proved themselves along the way</span>
              </div>
            </div>
            <div className="col-md-4">
              <div className="team-item">
                <img src="assets/images/georgi-profile.jpg" alt="" />
                <div className="down-content">
                  <h4>Georgi Kostadinov</h4>
                  <span>Co-Founder</span>
                  <p>
                    The driving force behind RentalCars, bringing a wealth of expertise and passion to the team.
                  </p>
                  <p>
                    <a href="#">
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
    );
}