import { Link } from 'react-router-dom'

import * as commentService from '../../../services/commentService'

import { Path } from '../../../utilities/Path'
import { dateFormatter } from '../../../utilities/dateFormatter'
import { useEffect, useState } from 'react'

export const Post = ({
    _id,
    title,
    content,
    image,
    _createdOn,
    author
}) => {
  const [commentsCount, setCommentsCount] = useState(0);

  useEffect(() => {
    const getCommentsCount = async () => {
      try {
        const result = await commentService.getCountByPostId(_id);

        setCommentsCount(result);
      } catch (error) {
        console.log(error);
      }
    };

    getCommentsCount();
  }, [_id]);

  return (
    <>
      <article id="tabs-1">
        <img src={image.url} alt="" />
        <h4>
          <Link to={Path.postDetails(_id)}>{title}</Link>
        </h4>
        <div style={{ marginBottom: 10 }}>
          <span>
            {author?.username} &nbsp;|&nbsp; {dateFormatter(_createdOn)}{" "}
            &nbsp;|&nbsp; {commentsCount} comments
          </span>
        </div>
        <p>{`${content.substring(0, 200)}...`}</p>
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