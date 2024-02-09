import { useEffect, useState } from 'react';

import * as reviewService from '../../services/reviewService'
import { Constants } from '../../utilities/constants'

import { CarReview } from '../CarReview/CarReview'
import { Pagination } from '../Pagination/Pagination'

import './CarReviews.css'

export const CarReviews = ({ carId }) => {
  const [reviews, setReviews] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const getCarReviews = async () => {
      try {
        const skip = (currPage - 1) * Constants.pagination.reviewsPageSize;
        const take = Constants.pagination.reviewsPageSize;

        const result = await reviewService.getAllByCarId(carId, skip, take);

        setReviews(result);
      } catch (error) {
        console.log(error.message);
      }
    };

    getCarReviews();
  }, [currPage]);

  useEffect(() => {
    const getTotalSize = async () => {
      try {
        const result = await reviewService.getReviewsCountByCarId(carId);

        setTotalPages(Math.ceil(result / Constants.pagination.reviewsPageSize));
      } catch (error) {
        console.log(error.message);
      }
    };

    getTotalSize();
  }, []);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrPage(newPage);
    }
  }

  return (
    <div className="car-reviews">
      <h2>Reviews</h2>

      {reviews && reviews.length > 0 ? (
        reviews.map((review) => <CarReview {...review} />)
      ) : (
        <p className="no-reviews-p">No reviews yet.</p>
      )}

      <br />
      <br />

      {reviews && reviews.length > 0 && (
        <Pagination
          currPage={currPage}
          totalPages={totalPages}
          handlePageChange={handlePageChange}
        />
      )}
    </div>
  );
}