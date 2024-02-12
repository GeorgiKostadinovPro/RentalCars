import './Profile.css'

export const Profile = () => {
    return (
      <>
        <div className="page-heading header-text">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1>Your Profile</h1>
                <span>This is your personal profile page</span>
              </div>
            </div>
          </div>
        </div>

        <div className="profile-container">
          <div className="side-menu">
            <img
              src="https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1677509740.jpg"
              alt=""
            />

            <ul>
              <li><a href="">Home</a></li>
              <li><a href="">Created Cars</a></li>
              <li><a href="">Rented Cars</a></li>
              <li><a href="">Logout</a></li>
            </ul>

          </div>
          <div className="profile-content">
            <h2>Your Personal Info</h2>

            <div className="text">
              <p>Username</p>
              <p>Peter</p>
            </div>

            <hr />

            <div className="text">
              <p>Email</p>
              <p>peter@abv.bg</p>
            </div>

            <hr />

            <div className="text">
              <p>Phone</p>
              <p>+359879454529</p>
            </div>
          </div>
        </div>
      </>
    );
}