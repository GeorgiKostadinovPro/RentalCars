import { useEffect, useState } from 'react';

import * as reviewService from '../../services/reviewService'

import { CarReview } from '../CarReview/CarReview'
import { Pagination } from '../Pagination/Pagination';

import './CarReviews.css'

export const CarReviews = ({ carId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getCarReviews = async () => {
      try {
        const result = await reviewService.getAllByCarId(carId);

        setReviews(result);
      } catch (error) {
        console.log(error.message);
      }
    };

    getCarReviews();
  }, []);

  return (
    <div className="car-reviews">
      <h2>Reviews</h2>

      {reviews && reviews.length > 0
      ? reviews.map((review) => (
        <CarReview {...review} />
      ))
      : <p className="no-reviews-p">No reviews yet.</p>}
    </div>
  );
}