import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import * as postService from '../../../services/postService'

import { dateFormatter } from '../../../utilities/dateFormatter'

import './PostDetails.css'

export const PostDetails = () => {
    const { postId } = useParams();

    const [postDetails, setPostDetails] = useState({});

    useEffect(() => {
        const getPostDetails = async () => {
            try {
                const result = await postService.getById(postId);

                console.log(result);

                setPostDetails(result);
            } catch (error) {
                console.log(error.message);
            }
        };
        
        getPostDetails();
    }, [postId])

    return (
      <>
        <div className="page-heading header-text">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1>{postDetails.title}</h1>
                <span>
                  <i className="fa fa-user" /> {postDetails.author?.username}{" "}
                  &nbsp;|&nbsp; <i className="fa fa-calendar" />{" "}
                  {dateFormatter(postDetails._createdOn)}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="more-info about-info">
          <div className="container">
            <div className="more-info-content">
              <div className="right-content">
                <div className="post-img-container">
                  <img
                    src={postDetails.image?.url}
                    className="img-fluid post-img"
                    alt=""
                  />
                </div>
                <br />
                <p>{postDetails.content}</p>
                <div className="post-tags-container">
                  <h3>Tags</h3>
                  <hr />
                  <div className="post-tags">
                    <ul>
                      {postDetails.tags && postDetails.tags.map((tag, i) => (
                        <li key={i}>
                          <a href="#">{tag}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
                  <form id="contact" action="" method="get">
                    <div className="row">
                      <div className="col-lg-12">
                        <fieldset>
                          <textarea
                            name="message"
                            rows={6}
                            className="form-control"
                            id="message"
                            placeholder="Your Message..."
                            required=""
                            defaultValue={""}
                          />
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
      </>
    );
}