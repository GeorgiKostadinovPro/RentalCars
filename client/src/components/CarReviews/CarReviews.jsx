import { useEffect, useState } from 'react';

import * as reviewService from '../../services/reviewService'
import { Constants } from '../../utilities/constants'

import { CarReview } from '../CarReview/CarReview'
import { CreateReview } from '../CreateReview/CreateReview'
import { Pagination } from '../Pagination/Pagination'

import './CarReviews.css'

export const CarReviews = ({ carId }) => {
  const [reviewsPaginated, setReviewsPaginated] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

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
  }, [currPage]);

  useEffect(() => {
    const getTotalSize = async () => {
      try {
        const result = await reviewService.getAllByCarId(carId);

        const count = result.length;

        setTotalPages(Math.ceil(count / Constants.pagination.reviewsPageSize));
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
      await reviewService.createReview({ ...data, carId });
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <>
      <div className="car-reviews">
        <h2>Reviews</h2>
        {/* {allReviewsCount > 0 && (
          <p className="rating-p">
            Rating: {averageRating ? averageRating : 0} / 5 ({allReviewsCount ? allReviewsCount : 0} reviews)
          </p>
        )} */}

        {reviewsPaginated && reviewsPaginated.length > 0 ? (
          reviewsPaginated.map((review) => <CarReview key={review._id} {...review} />)
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