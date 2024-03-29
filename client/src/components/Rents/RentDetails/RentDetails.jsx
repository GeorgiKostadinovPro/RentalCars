import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import * as rentService from '../../../services/rentService'

import { Path } from '../../../utilities/Path'
import { dateFormatter } from '../../../utilities/dateFormatter'

import './RentDetails.css'

export const RentDetails = () => {
  const { rentId } = useParams();

  const [rent, setRent] = useState({});

  useEffect(() => {
    const getRentDetails = async () => {
      try {
        const rentDetails = await rentService.getById(rentId);

        setRent(rentDetails);
      } catch (error) {
        console.log(error.message);
      }
    };

    getRentDetails();
  }, [rentId]);

  return (
    <>
      <div className="page-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Rent Details</h1>
              <span>
                The rent details are sent directly to your email address
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="rent-details-container">
        <h2>Rent Information</h2>
        <div className="details-content">
          <div className="car-information">
            <p>car: {rent.car?.make} {rent.car?.model}</p>
            <p>year of manufactoring: {rent.car?.year}</p>
            <p>price per day: ${rent.car?.pricePerDay}</p>
            <p>owner: {rent.author?.email}</p>
          </div>

          <hr />

          <div className="rent-information">
            <h3>Payment</h3>
            <p>Pick-up location: {rent.car?.location}</p>
            <p>
              Pick-up date: {dateFormatter(rent.pickUpDateAndTime)}
            </p>
            <p>
              Returning date: {dateFormatter(rent.returningDateAndTime)}
            </p>
            <p>Total days: {rent.totalDays}</p>
            <p>Total price: {rent.totalDays} * ${rent.car?.pricePerDay} = ${rent.totalPrice}</p>
          </div>

          <hr />

          <Link to={Path.cars} className="return-btn">
            Back to Cars
          </Link>
        </div>
      </div>
    </>
  );
}