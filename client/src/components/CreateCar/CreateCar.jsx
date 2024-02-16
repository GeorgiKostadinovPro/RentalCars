import { useForm } from 'react-hook-form'

import './CreateCar.css'

const defaultValues = {
  
};

export const CreateCar = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: {errors}
  } = useForm({ defaultValues, mode: 'onChange' });

  return (
    <>
      <div className="page-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Add your Car</h1>
              <span>You can manager your cars from your profile</span>
            </div>
          </div>
        </div>
      </div>

      <div className="create-car-container">
        <form action="" encType="multipart/form-data">
          <div className="inputs">
            <div className="input-content">
              <label htmlFor="make">Make</label>
              <input
                className="create-form-input"
                type="text"
                placeholder="Enter make..."
              />
            </div>
            <div className="input-content">
              <label htmlFor="model">Model</label>
              <input
                className="create-form-input"
                type="text"
                placeholder="Enter model..."
              />
            </div>
            <div className="input-content">
              <label htmlFor="year">Year</label>
              <input
                className="create-form-input"
                type="text"
                placeholder="Enter year..."
              />
            </div>
            <div className="input-content">
              <label htmlFor="body">Body</label>
              <input
                className="create-form-input"
                type="text"
                placeholder="Enter body type..."
              />
            </div>
            <div className="input-content">
              <label htmlFor="mileAge">Mileage</label>
              <input
                className="create-form-input"
                type="text"
                placeholder="Enter mileage..."
              />
            </div>
            <div className="input-content">
              <label htmlFor="transmission">Transimission</label>
              <input
                className="create-form-input"
                type="text"
                placeholder="Enter transmission..."
              />
            </div>
            <div className="input-content">
              <label htmlFor="fuelType">Fuel Type</label>
              <input
                className="create-form-input"
                type="text"
                placeholder="Enter fuel type..."
              />
            </div>
            <div className="input-content">
              <label htmlFor="horsePower">Horsepower</label>
              <input
                className="create-form-input"
                type="text"
                placeholder="Enter horsepower..."
              />
            </div>
            <div className="input-content">
              <label htmlFor="doors">Doors</label>
              <input
                className="create-form-input"
                type="text"
                placeholder="Enter doors..."
              />
            </div>
            <div className="input-content">
              <label htmlFor="luggageCapacity">Luggages</label>
              <input
                className="create-form-input"
                type="text"
                placeholder="Enter luggages..."
              />
            </div>
            <div className="input-content">
              <label htmlFor="maxPeople">Max People</label>
              <input
                className="create-form-input"
                type="text"
                placeholder="Enter people..."
              />
            </div>
            <div className="input-content">
              <label htmlFor="location">Location</label>
              <input
                className="create-form-input"
                type="text"
                placeholder="City, Country"
              />
            </div>
            <div className="input-content">
              <label htmlFor="pricePerDay">Price per Day</label>
              <input
                className="create-form-input"
                type="text"
                placeholder="Enter price..."
              />
            </div>
            <div className="input-content">
              <label htmlFor="gallery">Gallery</label>
              <input
                className="create-form-input"
                type="file"
                multiple
              />
            </div>
            <div className="input-content">
              <label htmlFor="description">Description</label>
              <textarea
                className="create-form-textarea"
                type="text"
                placeholder="Write description..."
              />
            </div>
          </div>

          <div className="submit-create">
            <input className="create-btn" type="submit" value="Create" />
          </div>
        </form>
      </div>
    </>
  );
}