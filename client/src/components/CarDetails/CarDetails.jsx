import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import * as carService from '../../services/carService'

import './CarDetails.css'

export const CarDetails = () => {
    const { carId } = useParams();
    const [carDetails, setCarDetails] = useState({});

    useEffect(() => {
        const getCarDetails = async () => {
            try {
                const carDetails = await carService.getById(carId);

                setCarDetails(carDetails);
            } catch (error) {
                console.log(error.message);
            }
        };

        getCarDetails();
    }, []);

    return (
      <>
        <div className="page-heading header-text">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1>
                  {carDetails.make} {carDetails.model}
                </h1>
                <p className="car-details-summary-p">
                  For Rent <strong>|</strong> Price: ${carDetails.pricePerDay} / day
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="car-details">
          <div className="left-container">
            <h2>right side</h2>
          </div>

          <div className="right-container">
            <h2>Rent Now</h2>
            <form action="">
                <div className="input-content">
                    <label htmlFor="">Full Name</label>
                    <input type="text" placeholder="Enter your full name"/>
                </div>
                <div className="input-content">
                    <label htmlFor="">Email Address</label>
                    <input type="text" placeholder="Enter your email"/>
                </div>
                <div className="input-content">
                    <label htmlFor="">Pick-up Date</label>
                    <input type="date" />
                </div>
                <div className="input-content">
                    <label htmlFor="">Pick-up Time</label>
                    <input type="time" />
                </div>
                <div className="input-content">
                    <label htmlFor="">Returning Time</label>
                    <input type="date" />
                </div>
                <div className="input-content">
                    <label htmlFor="">Returning Time</label>
                    <input type="time" />
                </div>
                <input className="rent-btn" type="submit" value="Rent"/>
            </form>
          </div>
        </div>
      </>
    );
}