export const Offer = ({
    _id, 
    make, 
    model, 
    pricePerDay,
    description, 
    gallery
}) => {
    return (
      <div className="col-md-4">
        <div className="service-item">
          <img src={gallery[0]} alt="" />
          <div className="down-content">
            <h4>{make} {model}</h4>
            <div style={{ marginBottom: 10 }}>
              <span>
                from <sup>$</sup>{pricePerDay} per day
              </span>
            </div>
            <p>
              {description}
            </p>
            <a href="offers.html" className="filled-button">
              Details
            </a>
          </div>
        </div>
        <br />
      </div>
    );
}