import { useEffect, useState } from 'react'

import * as carService from '../../services/carService'

import { Car } from './Car'   
import { Filter } from '../Filter/Filter'
import { Pagination } from '../Pagination/Pagination'
import { Constants } from '../../utilities/constants'

import './Cars.css'

export const Cars = () => {
  const [cars, setCars] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [filterCriteria, setFilterCriteria] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const skip = (currPage - 1) * Constants.pagination.pageSize;
      const take = Constants.pagination.pageSize;

      try {
        const result = await carService.getAll(filterCriteria, skip, take);

        setCars(result);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [filterCriteria, currPage]);

  useEffect(() => {
    const getTotalSize = async () => {
      try {
        const result = await carService.getCarsCount(filterCriteria);

        setTotalPages(Math.ceil(result / Constants.pagination.pageSize));
      } catch (error) {
        console.log(error.message);
      }
    };

    getTotalSize();
  }, [filterCriteria]);
  
  const handleFilterSubmit = (criteria) => {
    setFilterCriteria(criteria);
  }

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrPage(newPage);
    }
  };
    
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

      <Filter handleFilterSubmit={handleFilterSubmit} />

      <div className="cars">
        <div className="container">
          <div className="row">

            {
              cars.length > 0 
              ? cars.map(car => (
                  <Car key={car._id} {...car}/>
                ))
              : <h3>No cars were found</h3>
            }

          </div>
          <br />
          <br />

            <Pagination 
              currPage={currPage} 
              totalPages={totalPages} 
              handlePageChange={handlePageChange} />

          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </>
  );
}