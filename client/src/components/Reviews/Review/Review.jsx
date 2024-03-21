import { dateFormatter } from '../../../utilities/dateFormatter'
import { Constants } from '../../../utilities/constants'

import './Review.css'

export const Review = ({
  rating,
  message,
  _createdOn,
  author
}) => {
    return (
      <div className="single-review">
        <img
          src={
            author?.profilePictureUrl
              ? author?.profilePictureUrl
              : "https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1677509740.jpg"
          }
          alt="User profile"
        />
        <div className="review-content">
          <h5>
            {author?.username ? author?.username : author?.email}
            <span>{dateFormatter(_createdOn)}</span>
          </h5>
          <p className="review-stars">
            {[...Array(Constants.reviews.rating.maxValue)].map((rate, i) => {
              return i + 1 <= rating ? (
                <span key={i} className="fa fa-star checked"></span>
              ) : (
                <span key={i} className="fa fa-star"></span>
              );
            })}
          </p>
          <p>{message}</p>
        </div>
      </div>
    );
}