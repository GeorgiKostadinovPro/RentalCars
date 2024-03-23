import { useEffect, useState } from 'react'

import * as carService from '../../../services/carService'

import { CarRow } from './CarRow'

export const ManageCars = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        const getAllCars = async () => {
            try {
                const result = await carService.getAll();
                
                setCars(result);
            } catch (error) {
                console.log(error.message);
            }
        };

        getAllCars();
    }, []);

    return (
      <>
        <div className="container-xl">
          <div className="table-responsive">
            <div className="table-wrapper">
              <div className="table-title">
                <div className="row">
                  <div className="col-sm-6">
                    <h2>
                      Manage <b>All Cars</b>
                    </h2>
                  </div>
                </div>
              </div>
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Make</th>
                    <th>Model</th>
                    <th>Year</th>
                    <th>Created On</th>
                    <th style={{ textAlign: "left" }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {cars && cars.length > 0 ? (
                    cars.map((car, i) => (
                      <CarRow
                        key={car._id}
                        index={i + 1}
                        car={car}
                      />
                    ))
                  ) : (
                    <tr className="no-data-yet-p">
                      <td>No cars added yet.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
}