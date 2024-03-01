import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import * as commentService from '../../../services/commentService'
import { Constants } from '../../../utilities/constants'

import './CreateComment.css'

const defaultValues = {
    message: ''
}

export const CreateComment = ({ postId }) => {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm({ defaultValues, mode: 'onChange' });

    const createCommentSubmitHandler = async (data) => {
        try {
          await commentService.createComment({ ...data, postId });

          reset();

          navigate(`/blog/posts/${postId}/details`);
        } catch (error) {
          console.log(error.message);
        }
    };

    return (
      <div className="callback-form contact-us">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h2>
                  Leave a <em>comment</em>
                </h2>
                <span>Please share with us your thoughs</span>
              </div>
            </div>
            <div className="col-md-12">
              <div className="contact-form">
                <form
                  onSubmit={handleSubmit(createCommentSubmitHandler)}
                  id="contact"
                >
                  <div className="row">
                    <div className="col-lg-12">
                      <fieldset>
                        <textarea
                          {...register("message", Constants.comments.message)}
                          rows={6}
                          className="form-control"
                          id="message"
                          placeholder="Your Message..."
                          required=""
                          defaultValue={""}
                        />
                        <span
                          style={{
                            display: errors.message?.message ? "block" : "none",
                            color: "red",
                            margin: '-30px 0 30px 0'
                          }}
                        >
                          {errors.message?.message}
                        </span>
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <button
                          type="submit"
                          id="form-submit"
                          className="filled-button"
                        >
                          Submit
                        </button>
                      </fieldset>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}