import { dateFormatter } from '../../utilities/dateFormatter'
import { Constants } from '../../utilities/constants'

import './CarReview.css'

export const CarReview = ({
  rating,
  content,
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
          alt=""
        />
        <div className="review-content">
          <h5>
            {author?.username ? author?.username : author?.email}
            <span>{dateFormatter(_createdOn)}</span>
          </h5>
          <p className="review-stars">
            {[...Array(Constants.rating.maxRating).keys()].map((rate) => {
              return rate + 1 <= rating ? (
                <span className="fa fa-star checked"></span>
              ) : (
                <span className="fa fa-star"></span>
              );
            })}
          </p>
          <p>{content}</p>
        </div>
      </div>
    );
}