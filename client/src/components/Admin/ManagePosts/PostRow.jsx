import { Link } from 'react-router-dom'

import { Path } from '../../../utilities/Path'
import { dateFormatter } from "../../../utilities/dateFormatter"

export const PostRow = ({
    index,
    post,
    setPostIdToDeleteHandler
}) => {
    return (
        <tr>
          <td>{index}</td>
          <td>{`${post.title.slice(0, 40)}...`}</td>
          <td>{dateFormatter(post._createdOn)}</td>
          <td style={{ width: '125px' }}>
            <Link to={Path.postDetails(post._id)} className="details">
              <i className="fa-solid fa-circle-info"></i>
            </Link>
  
            <Link to={Path.editPost(post._id)} className="edit">
              <i className="fa-solid fa-pen"></i>
            </Link>
  
            <a
              onClick={() => setPostIdToDeleteHandler(post._id)}
              type="submit"
              className="delete"
            >
              <i className="fa-solid fa-trash"></i>
            </a>
          </td>
        </tr>
      );
}