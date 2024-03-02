import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import { addDays, differenceInDays } from 'date-fns'

import * as carService from '../../../services/carService'

import { PaymentForm } from '../PaymentForm/PaymentForm'
import { useAuthContext } from '../../../hooks/useAuthContext'
import { Constants } from '../../../utilities/constants'

import './RentForm.css'

const defaultValues = {
  fullName: '',
  email: '',
  pickUpDateAndTime: '',
  returningDateAndTime: ''
};

export const RentForm = ({ carId }) => {
  const { email } = useAuthContext();

  const [rentInfo, setRentInfo] = useState(null);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    watch,
    formState: { errors },
  } = useForm({ defaultValues, mode: "onChange" });

  useEffect(() => {
    if (email) {
      setValue('email', email);
    }
  }, []);

  const rentCarSubmitHandler = async (data) => {
    try {
      const car = await carService.getById(carId);

      const days = differenceInDays(new Date(data.returningDateAndTime), new Date(data.pickUpDateAndTime));

      const rent = {
        carId: car._id,
        totalPrice: car.pricePerDay * days, 
        totalDays: days,
        pickUpDateAndTime: data.pickUpDateAndTime,
        returningDateAndTime: data.returningDateAndTime
      };
      
      reset();

      setValue('email', email);

      setRentInfo(rent);
    } catch (error) {
      console.log(error.message);
    }
  };
  
  return (
    <>
      {rentInfo && <PaymentForm rentInfo={rentInfo} />}

      <form onSubmit={handleSubmit(rentCarSubmitHandler)}>
        <div className="input-content">
          <label htmlFor="fullName">Full Name</label>
          <input
            {...register("fullName", Constants.fullName)}
            type="text"
            placeholder="Enter your full name"
          />
          <span
            style={{
              display: errors.fullName?.message ? "block" : "none",
              color: "red",
            }}
          >
            {errors.fullName?.message}
          </span>
        </div>
        <div className="input-content">
          <label htmlFor="email">Email Address</label>
          <input
            {...register("email", Constants.email)}
            type="text"
            placeholder="Enter your email"
            disabled
          />
          <span
            style={{
              display: errors.email?.message ? "block" : "none",
              color: "red",
            }}
          >
            {errors.email?.message}
          </span>
        </div>
        <div className="input-content">
          <label htmlFor="pickUpDateAndTime">Pick-up ( Date and Time )</label>
          <input
            {...register("pickUpDateAndTime", {
              ...Constants.rent.pickUpDateAndTime,
              validate: (pickUpDateAndTime) => {
                const currDateTime = new Date();

                if (Date.parse(pickUpDateAndTime) <= currDateTime) {
                  return "Invalid pick-up date and time!";
                }
              },
            })}
            type="datetime-local"
          />
          <span
            style={{
              display: errors.pickUpDateAndTime?.message ? "block" : "none",
              color: "red",
            }}
          >
            {errors.pickUpDateAndTime?.message}
          </span>
        </div>
        <div className="input-content">
          <label htmlFor="pickUpTime">Returning ( Date and Time )</label>
          <input
            {...register("returningDateAndTime", {
              ...Constants.rent.returningDateAndTime,
              validate: (returningDateAndTime) => {
                const pickUpDateAndTime = new Date(watch("pickUpDateAndTime"));
                const returningDateTime = new Date(returningDateAndTime);

                if (returningDateTime <= addDays(pickUpDateAndTime, 1)) {
                  return "Invalid returning date and time! It should be at least one day after pick-up.";
                }
              },
            })}
            type="datetime-local"
          />
          <span
            style={{
              display: errors.returningDateAndTime?.message ? "block" : "none",
              color: "red",
            }}
          >
            {errors.returningDateAndTime?.message}
          </span>
        </div>
        <input className="rent-btn" type="submit" value="Rent" />
      </form>
    </>
  );
}