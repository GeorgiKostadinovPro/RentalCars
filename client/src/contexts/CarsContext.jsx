import { createContext, useState } from 'react'

import * as carService from '../services/carService'
import * as favouriteService from '../services/favouriteService'

import { Constants } from '../utilities/constants'

export const CarsContext = createContext();

export const CarsProvider = ({ children }) => {
  const [cars, setCars] = useState([]);
  const [carIdToDelete, setCarIdToDelete] = useState(null);

  const getAllCars = async (filterCriteria, currPage, totalPages) => {
    try {
      let result;

      if (currPage && totalPages) {
        const skip = (currPage - 1) * Constants.pagination.carsPageSize;
        const take = Constants.pagination.carsPageSize;

        result = await carService.getAll(filterCriteria, skip, take);
      } else {
        result = await carService.getAll();
      }

      setCars(result);
    } catch (error) {
      console.log(error.message);
    }
  };

  const getTotalSize = async (filterCriteria) => {
    try {
      const result = await carService.getCarsCount(filterCriteria);

      return result;
    } catch (error) {
      console.log(error.message);
    }
  };

  const getUserCars = async (userId) => {
    try {
      const result = await carService.getByUserId(userId);

      setCars(result);
    } catch (error) {
      console.log(error.message);
    }
  };

  const getFavouriteCars = async (userId) => {
    try {
      const result = await favouriteService.getAllByUserId(userId);

      setCars(result);
    } catch (error) {
      console.log(error.message);
    }
  };

  const deleteCarSubmitHandler = async (carId) => {
    try {
      await carService.deleteCar(carId);

      setCars((cars) => cars.filter((c) => c._id !== carId));

      setCarIdToDelete(null);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteFavouriteSubmitHandler = async (favouriteId) => {
    try {
      await favouriteService.deleteFavourite(favouriteId);

      setCars((cars) => cars.filter((f) => f._id !== favouriteId));

      setCarIdToDelete(null);
    } catch (error) {
      console.log(error);
    }
  };

  const setCarIdToDeleteHandler = (id) => {
    if (id) {
      setCarIdToDelete(id);
    } else {
      setCarIdToDelete(null);
    }
  };

  const values = {
    cars,
    getAllCars,
    getUserCars,
    getFavouriteCars,
    getTotalSize,
    deleteCarSubmitHandler,
    deleteFavouriteSubmitHandler,
    setCarIdToDeleteHandler,
    carIdToDelete
  };

  return (
    <CarsContext.Provider value={values}>
      {children}
    </CarsContext.Provider>
  );
}