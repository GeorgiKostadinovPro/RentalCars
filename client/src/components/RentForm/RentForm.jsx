import { useForm } from 'react-hook-form'

import { Constants } from '../../utilities/constants';

import './RentForm.css'

const defaultValues = {
  fullName: '',
  email: '',
  pickUpDateAndTime: '',
  returningDateAndTime: ''
};

export const RentForm = () => {
    const {
      register,
      handleSubmit,
      formState: {errors}
    } = useForm({ defaultValues, mode: 'onChange' });

    const rentCarSubmitHandler = (data) => {
      console.log(data);
    };
  
    return (
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
            {...register("pickUpDateAndTime", Constants.rent.pickUpDateAndTime)}
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
            {...register("returningDateAndTime", Constants.rent.returningDateAndTime)}
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
    );
}