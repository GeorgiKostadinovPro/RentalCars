import { useEffect, useState } from 'react';

import * as reviewService from '../../services/reviewService'
import { Constants } from '../../utilities/constants'

import { CarReview } from '../CarReview/CarReview'
import { CreateReview } from '../CreateReview/CreateReview'
import { Pagination } from '../Pagination/Pagination'

import './CarReviews.css'

export const CarReviews = ({ carId }) => {
  const [reviews, setReviews] = useState([]);
  const [allReviewsCount, setAllReviewsCount] = useState(1);
  const [averageRating, setAverageRating] = useState(0);
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

        setAllReviewsCount(result);
        setTotalPages(Math.ceil(result / Constants.pagination.reviewsPageSize));

        const ratings = await reviewService.getReviewsRatingByCarId(carId);

        const sum = ratings.reduce((acc, value) => {
          return acc + value.rating;
         }, 0);

        setAverageRating(sum / 4);
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
  };

  const createReviewSubmitHandler = async (data) => {
    try {
      await reviewService.createReview(data);

      setAllReviewsCount(state => state + 1);

      console.log(allReviewsCount);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <>
      <div className="car-reviews">
        <h2>Reviews</h2>
        {allReviewsCount > 0 && (
          <p className="rating-p">
            Rating: {averageRating} / 5 ({allReviewsCount} reviews)
          </p>
        )}

        {reviews && reviews.length > 0 ? (
          reviews.map((review) => <CarReview key={review._id} {...review} />)
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

      <hr />

      <CreateReview createReviewSubmitHandler={createReviewSubmitHandler} />
    </>
  );
}