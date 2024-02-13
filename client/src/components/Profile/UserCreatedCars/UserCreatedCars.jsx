import { useEffect, useState } from 'react'

import * as carService from '../../../services/carService'
import { useAuthContext } from '../../../hooks/useAuthContext'

import './UserCreatedCars.css'
import { SingleCar } from './SingleCar'

export const UserCreatedCars = () => {
  const [userCars, setUserCars] = useState([]);
  const [carIdToDelete, setCarIdToDelete] = useState(null);

  const { userId } = useAuthContext();

  useEffect(() => {
    const getUserCars = async () => {
      try {
        const result = await carService.getByUserId(userId);

        setUserCars(result);
      } catch (error) {
        console.log(error.message);
      }
    };

    getUserCars();
  }, []);
  
  const setCarIdToDeleteHandler = (id) => {
    if (id) {
      setCarIdToDelete(id);
    }
  }

  return (
    <>
      <div className="container-xl">
        <div className="table-responsive">
          <div className="table-wrapper">
            <div className="table-title">
              <div className="row">
                <div className="col-sm-6">
                  <h2>
                    Manage <b>My Cars</b>
                  </h2>
                </div>
                <div className="col-sm-6">
                  <a
                    href="#addEmployeeModal"
                    className="btn btn-success"
                    data-toggle="modal"
                  >
                    <i className="fa-solid fa-plus"></i> <span>Add New Car</span>
                  </a>
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
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {userCars && userCars.length > 0 ? (
                  userCars.map((car, i) => (
                    <SingleCar
                      key={car._id}
                      index={i + 1}
                      car={car}
                      setCarIdToDeleteHandler={setCarIdToDeleteHandler}
                    />
                  ))
                ) : (
                  <tr className="no-cars-yet-p">
                    <td>No cars added yet.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {carIdToDelete && <h1>Delete car is done</h1>}
    </>
  );
}