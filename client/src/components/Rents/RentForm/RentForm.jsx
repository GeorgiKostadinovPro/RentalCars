import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

import { addDays, differenceInDays } from 'date-fns'

import * as carService from '../../../services/carService'
import * as rentService from '../../../services/rentService'
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

  const [show, setShow] = useState(false);

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

  const handleClose = () => {
    setShow(false);
  }

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

      await rentService.createRent(rent);

      reset();

      setShow(true);
    } catch (error) {
      console.log(error.message);
    }
  };
  
  return (
    <>
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

      <Modal
        show={show}
        onHide={handleClose}
        style={{ marginTop: "100px" }}
      >
        <Modal.Header closeButton>
          <Modal.Title>You successfully rented this vehicle.</Modal.Title>
        </Modal.Header>
        <Modal.Body>Check your email for more information.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success">
            See Details
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}