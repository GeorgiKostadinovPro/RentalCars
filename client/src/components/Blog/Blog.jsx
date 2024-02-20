import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import * as postService from '../../services/postService'
import { dateFormatter } from '../../utilities/dateFormatter'
import { Path } from '../../utilities/Path'

import { Posts } from './Posts/Posts'

import './Blog.css'

export const Blog = () => {
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
              <form id="search_form" name="gs" method="GET" action="#">
                <input
                  type="text"
                  name="q"
                  className="form-control form-control-lg"
                  placeholder="type to search..."
                  autoComplete="on"
                />
              </form>
              <br />
              <br />
              <h4 className="h4">Recent posts</h4>
              <ul>
                {recentPosts &&
                  recentPosts.length > 0 &&
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
                  ))}
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