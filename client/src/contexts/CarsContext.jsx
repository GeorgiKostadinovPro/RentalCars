import { createContext, useState } from 'react'

import * as carService from '../services/carService'
import * as favouriteService from '../services/favouriteService'

export const CarsContext = createContext();

export const CarsProvider = ({ children }) => {
    const [cars, setCars] = useState([]);
    const [carIdToDelete, setCarIdToDelete] = useState(null);

    const getAllCars = async () => {
      try {
        const result = await carService.getAll();
        
        setCars(result);
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

          setCars((cars) => cars.filter(c => c._id !== carId));

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
        deleteCarSubmitHandler,
        deleteFavouriteSubmitHandler,
        setCarIdToDeleteHandler,
        carIdToDelete
    };

    return (
        <CarsContext.Provider value={values}>
            {children}
        </CarsContext.Provider>
    )
}