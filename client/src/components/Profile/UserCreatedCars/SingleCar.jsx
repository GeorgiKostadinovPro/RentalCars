import { Link } from 'react-router-dom'

import { Path } from '../../../utilities/Path'
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
          <Link to={Path.carDetails(car._id)} className="details">
            <i className="fa-solid fa-circle-info"></i>
          </Link>
          <Link className="edit">
            <i className="fa-solid fa-pen"></i>
          </Link>
          <a href="#deleteEmployeeModal" className="delete" data-toggle="modal">
            <i className="fa-solid fa-trash"></i>
          </a>
        </td>
      </tr>
    );
}