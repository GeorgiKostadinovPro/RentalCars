import { Link } from 'react-router-dom'

import { dateFormatter } from "../../../utilities/dateFormatter"

export const SingleCar = ({
    index, 
    car
}) => {
    return (
      <tr>
        <td>{index}</td>
        <td>{car.make}</td>
        <td>{car.model}</td>
        <td>{car.year}</td>
        <td>{dateFormatter(car._createdOn)}</td>
        <td>
          <Link to={`/cars/${car._id}/details`} className="details">
            <i class="fa-solid fa-circle-info"></i>
          </Link>
          <Link className="edit">
            <i class="fa-solid fa-pen"></i>
          </Link>
          <a href="#deleteEmployeeModal" className="delete" data-toggle="modal">
            <i class="fa-solid fa-trash"></i>
          </a>
        </td>
      </tr>
    );
}