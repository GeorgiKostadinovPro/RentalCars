import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import * as carService from '../../services/carService'
import * as cloudinaryService from '../../services/cloudinaryService'

import { Path } from '../../utilities/Path'
import { Constants } from '../../utilities/constants'

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
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm({ defaultValues, mode: 'onChange' });

  const createCarSubmitHanlder = async (data) => {
    try {
      const uploadedUrls = await cloudinaryService.uploadFiles(data.gallery);

      const carObj = { ...data, gallery: [] };

      uploadedUrls.forEach((url) => {
        carObj.gallery.push(url);
      });

      await carService.createCar(carObj);

      navigate(Path.allUserCars);
    } catch (error) {
      console.log(error.message);
    }
  };

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
        <form
          onSubmit={handleSubmit(createCarSubmitHanlder)}
          encType="multipart/form-data"
        >
          <div className="inputs">
            <div className="input-content">
              <label htmlFor="make">Make</label>
              <input
                {...register("make", Constants.car.make)}
                className="create-form-input"
                type="text"
                placeholder="Enter make..."
              />
              <span
                style={{
                  display: errors.make?.message ? "block" : "none",
                  color: "red",
                }}
              >
                {errors.make?.message}
              </span>
            </div>
            <div className="input-content">
              <label htmlFor="model">Model</label>
              <input
                {...register("model", Constants.car.model)}
                className="create-form-input"
                type="text"
                placeholder="Enter model..."
              />
              <span
                style={{
                  display: errors.model?.message ? "block" : "none",
                  color: "red",
                }}
              >
                {errors.model?.message}
              </span>
            </div>
            <div className="input-content">
              <label htmlFor="year">Year</label>
              <input
                {...register("year", Constants.car.year)}
                className="create-form-input"
                type="number"
                min="2000"
                max="2024"
                step="1"
                placeholder="Enter year..."
              />
              <span
                style={{
                  display: errors.year?.message ? "block" : "none",
                  color: "red",
                }}
              >
                {errors.year?.message}
              </span>
            </div>
            <div className="input-content">
              <label htmlFor="type">Body</label>
              <select
                {...register("type", Constants.car.type)}
                className="create-form-input"
              >
                <option value="">Choose a body</option>
                <option value="Convertable">Convertable</option>
                <option value="Coupe">Coupe</option>
                <option value="Hatchback">Hatchback</option>
                <option value="Minivan">Minivan</option>
                <option value="Pickup Truck">Pickup Truck</option>
                <option value="Sedan">Sedan</option>
                <option value="Sports Car">Soprts Car</option>
                <option value="Station Wagon">Station Wagon</option>
              </select>
              <span
                style={{
                  display: errors.type?.message ? "block" : "none",
                  color: "red",
                }}
              >
                {errors.type?.message}
              </span>
            </div>
            <div className="input-content">
              <label htmlFor="mileAge">Mileage ( km )</label>
              <input
                {...register("mileAge", Constants.car.mileAge)}
                className="create-form-input"
                type="number"
                min="2000"
                max="300000"
                step="1"
                placeholder="Enter mileage..."
              />
              <span
                style={{
                  display: errors.mileAge?.message ? "block" : "none",
                  color: "red",
                }}
              >
                {errors.mileAge?.message}
              </span>
            </div>
            <div className="input-content">
              <label htmlFor="transmission">Transimission</label>
              <select
                {...register("transmission", Constants.car.transmission)}
                className="create-form-input"
              >
                <option value="">Choose a transmission</option>
                <option value="Automatic">Automatic</option>
                <option value="Manual">Manual</option>
                <option value="Semi-Automatic">Semi-Automatic</option>
              </select>
              <span
                style={{
                  display: errors.transmission?.message ? "block" : "none",
                  color: "red",
                }}
              >
                {errors.transmission?.message}
              </span>
            </div>
            <div className="input-content">
              <label htmlFor="fuelType">Fuel Type</label>
              <select
                {...register("fuelType", Constants.car.fuelType)}
                className="create-form-input"
              >
                <option value="">Choose a fuel</option>
                <option value="Petrol">Petrol</option>
                <option value="Diezel">Diezel</option>
                <option value="Electric">Electric</option>
                <option value="Hybrid">Hybrid</option>
              </select>
              <span
                style={{
                  display: errors.fuelType?.message ? "block" : "none",
                  color: "red",
                }}
              >
                {errors.fuelType?.message}
              </span>
            </div>
            <div className="input-content">
              <label htmlFor="horsePower">Horsepower</label>
              <input
                {...register("horsePower", Constants.car.horsePower)}
                className="create-form-input"
                type="number"
                min="75"
                max="2300"
                step="1"
                placeholder="Enter horsepower..."
              />
              <span
                style={{
                  display: errors.horsePower?.message ? "block" : "none",
                  color: "red",
                }}
              >
                {errors.horsePower?.message}
              </span>
            </div>
            <div className="input-content">
              <label htmlFor="doors">Doors</label>
              <input
                {...register("doors", Constants.car.doors)}
                className="create-form-input"
                type="number"
                min="2"
                max="6"
                step="1"
                placeholder="Enter doors..."
              />
              <span
                style={{
                  display: errors.doors?.message ? "block" : "none",
                  color: "red",
                }}
              >
                {errors.doors?.message}
              </span>
            </div>
            <div className="input-content">
              <label htmlFor="luggageCapacity">Luggages</label>
              <input
                {...register("luggageCapacity", Constants.car.luggageCapacity)}
                className="create-form-input"
                type="number"
                min="2"
                max="10"
                step="1"
                placeholder="Enter luggages..."
              />
              <span
                style={{
                  display: errors.luggageCapacity?.message ? "block" : "none",
                  color: "red",
                }}
              >
                {errors.luggageCapacity?.message}
              </span>
            </div>
            <div className="input-content">
              <label htmlFor="maxPeople">Max People</label>
              <input
                {...register("maxPeople", Constants.car.maxPeople)}
                className="create-form-input"
                type="number"
                min="2"
                max="8"
                step="1"
                placeholder="Enter people..."
              />
              <span
                style={{
                  display: errors.maxPeople?.message ? "block" : "none",
                  color: "red",
                }}
              >
                {errors.maxPeople?.message}
              </span>
            </div>
            <div className="input-content">
              <label htmlFor="location">Location</label>
              <input
                {...register("location", Constants.car.location)}
                className="create-form-input"
                type="text"
                placeholder="City, Country"
              />
              <span
                style={{
                  display: errors.location?.message ? "block" : "none",
                  color: "red",
                }}
              >
                {errors.location?.message}
              </span>
            </div>
            <div className="input-content">
              <label htmlFor="pricePerDay">Price per Day ( $ )</label>
              <input
                {...register("pricePerDay", Constants.car.pricePerDay)}
                className="create-form-input"
                type="number"
                min="10"
                max="1000"
                step="1"
                placeholder="Enter price..."
              />
              <span
                style={{
                  display: errors.pricePerDay?.message ? "block" : "none",
                  color: "red",
                }}
              >
                {errors.pricePerDay?.message}
              </span>
            </div>
            <div className="input-content">
              <label htmlFor="gallery">Gallery ( minimum 2 pictures )</label>
              <input
                {...register("gallery", {
                  ...Constants.car.gallery,
                  validate: (value) => {
                    if (value.length < 2) {
                      return 'Not enough images!'
                    }
                  }
                })}
                className="create-form-input"
                type="file"
                multiple
                accept="image/png, image/jpg, image/jpeg"
              />
              <span
                style={{
                  display: errors.gallery?.message ? "block" : "none",
                  color: "red",
                }}
              >
                {errors.gallery?.message}
              </span>
            </div>
            <div className="input-content">
              <label htmlFor="description">Description</label>
              <textarea
                {...register("description", Constants.car.description)}
                className="create-form-input"
                type="text"
                placeholder="Write description..."
              />
              <span
                style={{
                  display: errors.description?.message ? "block" : "none",
                  color: "red",
                }}
              >
                {errors.description?.message}
              </span>
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