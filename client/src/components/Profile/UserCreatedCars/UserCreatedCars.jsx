import { useEffect, useState } from 'react'

import * as carService from '../../../services/carService'
import { useAuthContext } from '../../../hooks/useAuthContext'
import { SingleCar } from './SingleCar'

import './UserCreatedCars.css'

export const UserCreatedCars = () => {
  const [userCars, setUserCars] = useState([]);

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
                    <i className="fa-solid fa-plus"></i>{" "}
                    <span>Add New Car</span>
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
                    <SingleCar key={car._id} index={i + 1} car={car} />
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

      {/* Delete Modal HTML */}
      <div id="deleteEmployeeModal" className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <form>
              <div className="modal-header">
                <h4 className="modal-title">Delete Employee</h4>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-hidden="true"
                >
                  ×
                </button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to delete these Records?</p>
                <p className="text-warning">
                  <small>This action cannot be undone.</small>
                </p>
              </div>
              <div className="modal-footer">
                <input
                  type="button"
                  className="btn btn-default"
                  data-dismiss="modal"
                  defaultValue="Cancel"
                />
                <input
                  type="submit"
                  className="btn btn-danger"
                  defaultValue="Delete"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}