export const Car = ({
    _id,
    make,
    model,
    pricePerDay,
    maxPeople,
    luggageCapacity,
    doors,
    transmission,
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
              <i className="fa fa-user" title="passegengers" /> {maxPeople}
              &nbsp;&nbsp;&nbsp;
              <i className="fa fa-briefcase" title="luggages" /> {luggageCapacity}
              &nbsp;&nbsp;&nbsp;
              <i className="fa fa-sign-out" title="doors" /> {doors}
              &nbsp;&nbsp;&nbsp;
              <i className="fa fa-cog" title="transmission" /> {transmission}
            </p>
            <a
              href="#"
              data-toggle="modal"
              data-target="#exampleModal"
              className="filled-button"
            >
              Book Now
            </a>
          </div>
        </div>
        <br />
      </div>
    );
}