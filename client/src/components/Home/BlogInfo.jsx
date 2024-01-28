import '../Common/Info.css'

export const BlogInfo = () => {
    return (
        <div className="more-info" style={{marginBottom: '140px'}}>
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
                  <li>
                    <a href="#tabs-1">
                      Lorem ipsum dolor sit amet, consectetur adipisicing <br />{" "}
                      <small>John Doe &nbsp;|&nbsp; 27.07.2020 10:10</small>
                    </a>
                  </li>
                  <li>
                    <a href="#tabs-2">
                      Mauris lobortis quam id dictum dignissim <br />{" "}
                      <small>John Doe &nbsp;|&nbsp; 27.07.2020 10:10</small>
                    </a>
                  </li>
                  <li>
                    <a href="#tabs-3">
                      Class aptent taciti sociosqu ad litora torquent per <br />{" "}
                      <small>John Doe &nbsp;|&nbsp; 27.07.2020 10:10</small>
                    </a>
                  </li>
                </ul>
                <br />
                <div className="text-center">
                  <a href="blog.html" className="filled-button">
                    Read More
                  </a>
                </div>
                <br />
              </div>
              <div className="col-md-8">
                <section className="tabs-content">
                  <article id="tabs-1">
                    <img src="assets/images/blog-image-1-940x460.jpg" alt="" />
                    <h4>
                      <a href="blog-details.html">
                        Lorem ipsum dolor sit amet, consectetur adipisicing.
                      </a>
                    </h4>
                    <p>
                      Sed ut dolor in augue cursus ultrices. Vivamus mauris
                      turpis, auctor vel facilisis in, tincidunt vel diam. Sed
                      vitae scelerisque orci. Nunc non magna orci. Aliquam
                      commodo mauris ante, quis posuere nibh vestibulum sit
                      amet.
                    </p>
                  </article>
                </section>
              </div>
            </div>
          </div>
        </div>
    );
}