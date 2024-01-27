import '../Common/Facts.css'

export const Facts = () => {
    return (
        <div className="fun-facts">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="left-content">
                  <span>Some interesting facts</span>
                  <h2>
                    Driving Success: {" "}
                    <em>RentalCars in Numbers</em>
                  </h2>
                  <p>
                    We are operating in the vibrant city of Sofia, providing convenient and accessible car rental solutions.
                    Proudly serving and satisfying 1,280 clients who have chosen RentalCars for their journey, making their experiences memorable.
                    <br />
                    <br />
                    We have a high satisfaction rate with positive feedback, reflecting our dedication to customer happiness and service excellence.
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
    );
}