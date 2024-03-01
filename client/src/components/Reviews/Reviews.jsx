import { useEffect, useState } from 'react'

import * as reviewService from '../../services/reviewService'
import { Constants } from '../../utilities/constants'

import { Review } from './Review/Review'
import { CreateReview } from './CreateReview/CreateReview'
import { Pagination } from '../Pagination/Pagination'

import './Reviews.css'

export const Reviews = ({ carId }) => {
  const [reviewsPaginated, setReviewsPaginated] = useState([]);
  const [allReviewsCount, setAllReviewsCount] = useState(0);
  const [avgRating, setAvgRating] = useState(0);

  const [currPage, setCurrPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [state, updateState] = useState({});

  useEffect(() => {
    const getCarReviews = async () => {
      try {
        const skip = (currPage - 1) * Constants.pagination.reviewsPageSize;
        const take = Constants.pagination.reviewsPageSize;

        const result = await reviewService.getAllByCarId(carId, skip, take);

        setReviewsPaginated(result);
      } catch (error) {
        console.log(error.message);
      }
    };

    getCarReviews();
  }, [currPage, state]);

  useEffect(() => {
    const getTotalSize = async () => {
      try {
        const count = await reviewService.getReviewsCountByCarId(carId);

        setAllReviewsCount(count);
        setTotalPages(Math.ceil(count / Constants.pagination.reviewsPageSize));

        const average = await reviewService.getAverageRatingByCarId(carId);

        setAvgRating(average);
      } catch (error) {
        console.log(error.message);
      }
    };

    getTotalSize();
  }, [state]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrPage(newPage);
    }
  };

  const createReviewSubmitHandler = async (data) => {
    try {
      await reviewService.createReview({ ...data, carId });

      updateState(state => ({ ...state }));
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="car-reviews">
        <h2>Reviews</h2>
        {allReviewsCount > 0 && (
          <p className="rating-p">
            Rating: {avgRating} / 5 ({allReviewsCount} reviews)
          </p>
        )}

        {reviewsPaginated && reviewsPaginated.length > 0 ? (
          reviewsPaginated.map((review) => <Review key={review._id} {...review} />)
        ) : (
          <p className="no-reviews-p">No reviews yet.</p>
        )}

        <br />
        <br />

        {reviewsPaginated && reviewsPaginated.length > 0 && (
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