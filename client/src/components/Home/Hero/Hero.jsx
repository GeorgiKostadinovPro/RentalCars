import './Hero.css'

export const Hero = () => {
    return (
        <div className="main-banner header-text" id="top">
          <div className="Modern-Slider">
            <div className="item item-1">
              <div className="img-fill">
                <div className="text-content">
                  <h6>Welcome to Rental Cars!</h6>
                  <h4>
                    Your ultimate destination
                    <br /> 
                    for car rentals
                  </h4>
                  <p>
                    Your journey starts here at RentalCars – where convenience meets quality. Let the adventure begin!
                  </p>
                  <a href="contact.html" className="filled-button">
                    contact us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
}