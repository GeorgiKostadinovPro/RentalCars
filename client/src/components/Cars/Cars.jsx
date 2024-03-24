import { useEffect, useState } from 'react'

import { useCarsContext } from '../../hooks/useCarsContext'

import { Car } from './Car'   
import { Filter } from '../Filter/Filter'
import { Pagination } from '../Pagination/Pagination'
import { Constants } from '../../utilities/constants'

import './Cars.css'

export const Cars = () => {
  const {
    cars,
    getAllCars,
    getTotalSize
  } = useCarsContext();

  const [currPage, setCurrPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [filterCriteria, setFilterCriteria] = useState(null);

  useEffect(() => {
    getAllCars(filterCriteria, currPage, totalPages);
  }, [filterCriteria, currPage]);

  useEffect(() => {
    getTotalSize(filterCriteria)
      .then((res) => {
        setCurrPage(1);
        setTotalPages(Math.ceil(res / Constants.pagination.carsPageSize));
      });
  }, [filterCriteria]);
  
  const handleFilterSubmit = (criteria) => {
    setFilterCriteria(criteria);
  };

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

            {cars && cars.length > 0 ? (
              cars.map((car) => <Car key={car._id} {...car} />)
            ) : (
              <h3>No cars were found</h3>
            )}

          </div>
          
          <br />
          <br />
          
          {cars && cars.length > 0 && (
            <Pagination
              currPage={currPage}
              totalPages={totalPages}
              handlePageChange={handlePageChange}
            />
          )}

          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </>
  );
}