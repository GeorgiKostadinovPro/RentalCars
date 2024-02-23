import { Link } from 'react-router-dom'

import { Path } from '../../../utilities/Path'
import { dateFormatter } from '../../../utilities/dateFormatter'

export const Post = ({
    _id,
    title,
    content,
    image,
    _createdOn,
    author
}) => {
    return (
      <>
        <article id="tabs-1">
          <img src={image.url} alt="" />
          <h4>
            <Link to={Path.postDetails(_id)}>
              {title}
            </Link>
          </h4>
          <div style={{ marginBottom: 10 }}>
            <span>
              {author?.username} &nbsp;|&nbsp; {dateFormatter(_createdOn)} &nbsp;|&nbsp; 15 comments
            </span>
          </div>
          <p>
            {`${content.substring(0, 200)}...`}
          </p>
          <br />
          <div>
            <Link to={Path.postDetails(_id)} className="filled-button">
              Continue Reading
            </Link>
          </div>
        </article>
        <br />
        <br />
        <br />
      </>
    );
}