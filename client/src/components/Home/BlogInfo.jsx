import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import * as postService from '../../services/postService'
import { dateFormatter } from '../../utilities/dateFormatter'
import { Path } from '../../utilities/Path'

import '../Common/Info.css'

export const BlogInfo = () => {
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
  }, [])

  return (
    <div className="more-info" style={{ marginBottom: "140px" }}>
      <div className="container">
        <div className="section-heading">
          <h2>
            Read our <em>Blog</em>
          </h2>
          <span>We have a daily blog with interesting news!</span>
        </div>
        <div className="row" id="tabs">
          <div className="col-md-4">
            <ul>
              {recentPosts &&
                recentPosts.length > 0 &&
                recentPosts.map((post) => (
                  <li key={post._id}>
                    <Link to={Path.postDetails(post._id)}>
                      {post.title} <br />{" "}
                      <small>{post.author?.username} &nbsp;|&nbsp; {dateFormatter(post._createdOn)}</small>
                    </Link>
                  </li>
                ))}
            </ul>
            <br />
            <div className="text-center">
              <Link to={Path.blog} className="filled-button">
                Read More
              </Link>
            </div>
            <br />
          </div>
          <div className="col-md-8">
            <section className="tabs-content">
              <article id="tabs-1">
                <img src="assets/images/blog-image-1-940x460.jpg" alt="" />
                <h4>
                  <a href="blog-details.html">Discover Our Blogosphere</a>
                </h4>
                <p>
                  Dive into a treasure trove of insights, stories, and expertise
                  in our Blogosphere. Explore a diverse range of topics, from
                  the latest trends to in-depth guides, as we share valuable
                  content that informs, inspires, and entertains.
                </p>
              </article>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}