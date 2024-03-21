import { useForm } from 'react-hook-form'

import { Constants } from '../../../utilities/constants'

import './CreateReview.css'

const defaultValues = {
    rating: 0,
    message: ''
};

export const CreateReview = ({ createReviewSubmitHandler }) => {
    const {
        register,
        handleSubmit,
        setValue,
        setError,
        clearErrors,
        watch,
        reset,
        formState: {errors}
    } = useForm({defaultValues, mode: 'onChange'});

    const handleStarClick = (rating) => {
        setValue('rating', rating);

        if (errors.rating?.message) {
          clearErrors('rating');
        }
    };

    const onSubmitHandler = (data) => {
      if (data.rating < Constants.reviews.rating.minValue
        || data.rating > Constants.reviews.rating.maxValue ) {
        setError("rating", {
          type: "custom",
          message: Constants.reviews.rating.message,
        });

        return;
      }

      createReviewSubmitHandler(data);

      reset();
    };

    return (
      <div className="create-review">
        <h2>Leave a Review</h2>
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <div className="set-rating">
            <div className="rating-stars">
              {[...Array(Constants.reviews.rating.maxValue)].map((rate, i) => {
              return i + 1 <= watch("rating") ? (
                <span
                  key={i}
                  onClick={() => handleStarClick(i + 1)}
                  className="fa fa-star checked"
                ></span>
              ) : (
                <span
                  key={i}
                  onClick={() => handleStarClick(i + 1)}
                  className="fa fa-star"
                ></span>
              );
            })}
            </div>
            <span
              style={{
                display: errors.rating?.message ? "block" : "none",
                margin: '-10px 0 10px 0',
                color: "red",
              }}
            >
              {errors.rating?.message}
            </span>
          </div>
          <div className="set-message">
            <textarea
              {...register("message", Constants.reviews.message)}
              placeholder="Your message..."
            ></textarea>
            <span
              style={{
                display: errors.message?.message ? "block" : "none",
                color: "red",
              }}
            >
              {errors.message?.message}
            </span>
          </div>
          <div className="btn-group">
            <button type="submit">Post Review</button>
          </div>
        </form>
      </div>
    );
}