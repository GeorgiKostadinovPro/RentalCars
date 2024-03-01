import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import * as postService from '../../../services/postService'
import { dateFormatter } from '../../../utilities/dateFormatter'
import { CreateComment } from '../../Comments/CreateComment/CreateComment'

import './PostDetails.css'

export const PostDetails = () => {
    const { postId } = useParams();

    const [postDetails, setPostDetails] = useState({});

    useEffect(() => {
        const getPostDetails = async () => {
            try {
                const result = await postService.getById(postId);

                setPostDetails(result);
            } catch (error) {
                console.log(error.message);
            }
        };
        
        getPostDetails();
    }, [postId]);

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
        
        <CreateComment postId={postId} />
      </>
    );
}