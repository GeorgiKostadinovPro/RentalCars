import { useEffect, useState } from 'react'
import { Pagination } from '../Common/Pagination'
import { Car } from './Car'

import * as carService from '../../services/carService'   

import './Cars.css'

export const Cars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    carService
      .getAll()
      .then(result => {
        setCars(result)
      })
      .catch(error => {
        console.log(error.message);
      });
  }, []);
    
  return (
    <>
      <div className="page-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Cars for rent</h1>
              <span>Review the wide range collection of cars</span>
            </div>
          </div>
        </div>
      </div>
      <div className="cars">
        <div className="container">
          <div className="row">

            {cars.length > 0 && cars.map(car => (
              <Car key={car._id} {...car}/>
            ))}

          </div>
          <br />
          <br />
            <Pagination />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </>
  );
}