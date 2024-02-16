import { useForm } from 'react-hook-form'

import './CreateCar.css'

const defaultValues = {
  make: '',
  model: '',
  year: '',
  type: '',
  mileAge: '',
  transmission: '',
  fuelType: '',
  horsePower: '',
  doors: '',
  luggageCapacity: '',
  maxPeople: '',
  location: '',
  pricePerDay: '',
  gallery: [],
  description: ''
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
              <span>You can manage your cars from your profile</span>
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
                type="number"
                min="2000"
                max="2024"
                step="1"
                placeholder="Enter year..."
              />
            </div>
            <div className="input-content">
              <label htmlFor="type">Body</label>
              <select className="create-form-input">
                <option value="Convertable">Convertable</option>
                <option value="Coupe">Coupe</option>
                <option value="Hatchback">Hatchback</option>
                <option value="Minivan">Minivan</option>
                <option value="Pickup Truck">Pickup Truck</option>
                <option value="Sedan">Sedan</option>
                <option value="Sports Car">Soprts Car</option>
                <option value="Station Wagon">Station Wagon</option>
              </select>
            </div>
            <div className="input-content">
              <label htmlFor="mileAge">Mileage</label>
              <input
                className="create-form-input"
                type="number"
                min="2000"
                max="300000"
                step="1"
                placeholder="Enter mileage..."
              />
            </div>
            <div className="input-content">
              <label htmlFor="transmission">Transimission</label>
              <select className="create-form-input">
                <option value="Automatic">Automatic</option>
                <option value="Manual">Manual</option>
                <option value="Semi-Automatic">Semi-Automatic</option>
              </select>
            </div>
            <div className="input-content">
              <label htmlFor="fuelType">Fuel Type</label>
              <select className="create-form-input">
                <option value="Petrol">Petrol</option>
                <option value="Diezel">Diezel</option>
                <option value="Electric">Electric</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </div>
            <div className="input-content">
              <label htmlFor="horsePower">Horsepower</label>
              <input
                className="create-form-input"
                type="number"
                min="75"
                max="2300"
                step="1"
                placeholder="Enter horsepower..."
              />
            </div>
            <div className="input-content">
              <label htmlFor="doors">Doors</label>
              <input
                className="create-form-input"
                type="number"
                min="2"
                max="6"
                step="1"
                placeholder="Enter doors..."
              />
            </div>
            <div className="input-content">
              <label htmlFor="luggageCapacity">Luggages</label>
              <input
                className="create-form-input"
                type="number"
                min="2"
                max="10"
                step="1"
                placeholder="Enter luggages..."
              />
            </div>
            <div className="input-content">
              <label htmlFor="maxPeople">Max People</label>
              <input
                className="create-form-input"
                type="number"
                min="2"
                max="8"
                step="1"
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
              <label htmlFor="pricePerDay">Price per Day ( $ )</label>
              <input
                className="create-form-input"
                type="number"
                min="10"
                max="1000"
                step="1"
                placeholder="Enter price..."
              />
            </div>
            <div className="input-content">
              <label htmlFor="gallery">Gallery ( minimum 2 pictures )</label>
              <input className="create-form-input" type="file" multiple />
            </div>
            <div className="input-content">
              <label htmlFor="description">Description</label>
              <textarea
                className="create-form-input"
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