import { useForm } from 'react-hook-form'

import { Constants } from '../../utilities/constants';

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
        watch,
        reset,
        formState: {errors}
    } = useForm({defaultValues, mode: 'onChange'});

    const handleStarClick = (rating) => {
        setValue('rating', rating);
    };

    const onSubmitHandler = (data) => {
      createReviewSubmitHandler(data);

      reset();
    };

    return (
      <div className="create-review">
        <h2>Leave a Review</h2>
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <div className="set-rating">
            {[...Array(Constants.reviews.maxRating)].map((rate, i) => {
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
          <div className="set-message">
            <textarea
              {...register("message", Constants.reviews.message)}
              cols="45"
              rows="5"
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