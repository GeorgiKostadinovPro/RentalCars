import { useForm } from 'react-hook-form'

import './Search.css'

const defaultValues = {
    year: '',
    make: '',
    fuelType: '',
    bodyStyle: '',
    transmission: '',
    pricePerDay: ''
};

export const Search = ({ handleSearchSubmit }) => {
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm(defaultValues);

    return (
      <div className="search">
        <div className="container">
          <form onSubmit={handleSubmit(handleSearchSubmit)}>
            <div className="right-content">
              <div className="select-item">
                <p>Select Year</p>
                <select {...register("year")} className="select-box">
                  <option value="">Year</option>
                  <option value={2020}>2020</option>
                  <option value={2021}>2021</option>
                  <option value={2022}>2022</option>
                  <option value={2023}>2023</option>
                  <option value={2024}>2024</option>
                </select>
              </div>
              <div className="select-item">
                <p>Select Make</p>
                <select {...register("make")} className="select-box">
                  <option value="">Make</option>
                  <option value="BMW">BMW</option>
                  <option value="Ford">Ford</option>
                  <option value="Volkswagen">Volkswagen</option>
                  <option value="Tesla">Tesla</option>
                  <option value="Toyota">Toyta</option>
                </select>
              </div>
              <div className="select-item">
                <p>Select Fuel Type</p>
                <select {...register("fuelType")} className="select-box">
                  <option value="">Fuel Type</option>
                  <option value="Petrol">Petrol</option>
                  <option value="Diesel">Diesel</option>
                  <option value="Gas">Gas</option>
                  <option value="Electric">Electric</option>
                  <option value="Hybrid">Hybrid</option>
                </select>
              </div>
              <div className="select-item">
                <p>Select Body Style</p>
                <select {...register("bodyStyle")} className="select-box">
                  <option value="">Body Style</option>
                  <option value="Sedan">Sedan</option>
                  <option value="Coupe">Coupe</option>
                  <option value="Hatchback">Hatcback</option>
                  <option value="Combi">Combi</option>
                  <option value="Station Wagon">Station Wagon</option>
                </select>
              </div>
              <div className="select-item">
                <p>Select Transmission</p>
                <select {...register("transmission")} className="select-box">
                  <option value="">Transmission</option>
                  <option value="Auto">Auto</option>
                  <option value="Manual">Manual</option>
                  <option value="Electric">Electric</option>
                </select>
              </div>
              <div className="select-item">
                <p>Select Price per Day</p>
                <select {...register("pricePerDay")} className="select-box">
                  <option value="">Price per Day</option>
                  <option value={45}>45</option>
                  <option value={60}>60</option>
                  <option value={80}>80</option>
                </select>
              </div>
            </div>
            <div className="left-content">
              <button type="submit">Search</button>
            </div>
          </form>
        </div>
      </div>
    );
}