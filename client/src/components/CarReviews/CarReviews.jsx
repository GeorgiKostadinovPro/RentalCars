import { CarReview } from '../CarReview/CarReview'
import { Pagination } from '../Pagination/Pagination';

import './CarReviews.css'

export const CarReviews = () => {
    return (
      <div className="car-reviews">
        <h2>Reviews</h2>

        <CarReview />
        <CarReview />
        <CarReview />
      </div>
    );
}