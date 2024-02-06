import { useForm } from 'react-hook-form'

import './Filter.css'

const defaultValues = {
  searchInput: '',
  searchCriteria: '',
  sortCriteria: '',
  sortOrder: ''
};

export const Filter = ({ handleFilterSubmit }) => {
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm(defaultValues);

    return (
      <div className="filter">
        <div className="container">
          <form onSubmit={handleSubmit(handleFilterSubmit)}>
            <div className="left-content">
              <div className="search-section">
                <p>Search</p>
                <div className="search-content">
                  <input
                    {...register("searchInput")}
                    type="text"
                    className="select-box"
                    placeholder="Type anything..."
                  />

                  <select {...register("searchCriteria")} className="select-box">
                    <option value="make">Make</option>
                    <option value="model">Model</option>
                    <option value="year">Year</option>
                    <option value="type">Body Type</option>
                    <option value="fuelType">Fuel Type</option>
                    <option value="transmission">Transmission</option>
                  </select>
                </div>
              </div>

              <div className="sort-section">
                <p>Sort</p>
                <div className="sort-content">
                  <select {...register("sortCriteria")} className="select-box">
                    <option value="make">Make</option>
                    <option value="model">Model</option>
                    <option value="year">Year</option>
                    <option value="type">Body Type</option>
                    <option value="fuelType">Fuel Type</option>
                    <option value="transmission">Transmission</option>
                  </select>

                  <select {...register("sortOrder")} className="select-box">
                    <option value="">Ascending</option>
                    <option value="desc">Descending</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="right-content">
              <button type="submit">Apply</button>
            </div>
          </form>
        </div>
      </div>
    );
}