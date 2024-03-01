import { dateFormatter } from '../../../utilities/dateFormatter'

import './Comment.css'

export const Comment = ({
  message,
  _createdOn,
  author
}) => {
    return (
      <div className="single-comment">
        <img
          src={
            author?.profilePictureUrl
              ? author?.profilePictureUrl
              : "https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1677509740.jpg"
          }
        />
        <div className="comment-content">
          <h5>
            {author?.username ? author?.username : author?.email}
            <span>{dateFormatter(_createdOn)}</span>
          </h5>

          <p>{message}</p>
        </div>
      </div>
    );
}