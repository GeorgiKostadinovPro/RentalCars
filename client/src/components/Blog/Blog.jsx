import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import * as postService from '../../services/postService'
import { dateFormatter } from '../../utilities/dateFormatter'
import { Path } from '../../utilities/Path'

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
            <div className="col-md-8">
              <section className="tabs-content">
                <article id="tabs-1">
                  <img src="assets/images/blog-image-1-940x460.jpg" alt="" />
                  <h4>
                    <a href="blog-details.html">
                      Lorem ipsum dolor sit amet, consectetur adipisicing.
                    </a>
                  </h4>
                  <div style={{ marginBottom: 10 }}>
                    <span>
                      John Doe &nbsp;|&nbsp; 27.07.2020 10:10 &nbsp;|&nbsp; 15
                      comments
                    </span>
                  </div>
                  <p>
                    Sed ut dolor in augue cursus ultrices. Vivamus mauris
                    turpis, auctor vel facilisis in, tincidunt vel diam. Sed
                    vitae scelerisque orci. Nunc non magna orci. Aliquam commodo
                    mauris ante, quis posuere nibh vestibulum sit amet.
                  </p>
                  <br />
                  <div>
                    <a href="blog-details.html" className="filled-button">
                      Continue Reading
                    </a>
                  </div>
                </article>
                <br />
                <br />
                <br />
                <article id="tabs-2">
                  <img src="assets/images/blog-image-2-940x460.jpg" alt="" />
                  <h4>
                    <a href="blog-details.html">
                      Mauris lobortis quam id dictum dignissim
                    </a>
                  </h4>
                  <div style={{ marginBottom: 10 }}>
                    <span>
                      John Doe &nbsp;|&nbsp; 27.07.2020 10:10 &nbsp;|&nbsp; 15
                      comments
                    </span>
                  </div>
                  <p>
                    Sed ut dolor in augue cursus ultrices. Vivamus mauris
                    turpis, auctor vel facilisis in, tincidunt vel diam. Sed
                    vitae scelerisque orci. Nunc non magna orci. Aliquam commodo
                    mauris ante, quis posuere nibh vestibulum sit amet
                  </p>
                  <br />
                  <div>
                    <a href="blog-details.html" className="filled-button">
                      Continue Reading
                    </a>
                  </div>
                </article>
              </section>
            </div>
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
                    <>
                      <li key={post._id}>
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
                      <li>
                        <br />
                      </li>
                    </>
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