import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import * as postService from '../../services/postService'

import { dateFormatter } from '../../utilities/dateFormatter'
import { Constants } from '../../utilities/constants'
import { Path } from '../../utilities/Path'

import { Posts } from './Posts/Posts'

import './Blog.css'

const defaultValues = {
  title: ''
}

export const Blog = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues, mode: 'onChange' });

  const [recentPosts, setRecentPosts] = useState([]);

  useEffect(() => {
    const getRecentPosts = async () => {
      try {
        const result = await postService.getRecent();

        setRecentPosts(result);
      } catch (error) {
        console.log(error);
      }
    };

    getRecentPosts();
  }, []);

  const searchRecentPostsSubmitHandler = async ({ title }) => {
    try {
      const result = await postService.getRecent(title);

      setRecentPosts(result);

      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="page-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Read our Blog</h1>
              <span>Read daily posts, comment and like</span>
            </div>
          </div>
        </div>
      </div>
      <div className="single-services">
        <div className="container">
          <div className="row">
            <Posts />

            <div className="col-md-4">
              <h4 className="h4">Search</h4>
              <form
                onSubmit={handleSubmit(searchRecentPostsSubmitHandler)}
                id="search_form"
              >
                <div className="search-box">
                  <input
                    {...register("title", Constants.posts.search)}
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="type to search..."
                    autoComplete="on"
                  />
                  <button>
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </button>
                </div>
                <span
                  style={{
                    display: errors.title?.message ? "block" : "none",
                    color: "red",
                    marginTop: "10px",
                  }}
                >
                  {errors.title?.message}
                </span>
              </form>
              <br />
              <br />
              <h4 className="h4">Recent posts</h4>
              <ul>
                {recentPosts && recentPosts.length > 0 ? (
                  recentPosts.map((post) => (
                    <li key={post._id} style={{ marginBottom: 24 }}>
                      <h5 style={{ marginBottom: 10 }}>
                        <Link to={Path.postDetails(post._id)}>
                          {post.title}
                        </Link>
                      </h5>
                      <small>
                        <i className="fa fa-user" /> {post.author?.username}{" "}
                        &nbsp;|&nbsp; <i className="fa fa-calendar" />{" "}
                        {dateFormatter(post._createdOn)}
                      </small>
                    </li>
                  ))
                ) : (
                  <p className="no-posts-found">No posts found</p>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </>
  );
}