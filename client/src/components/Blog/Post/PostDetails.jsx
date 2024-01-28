export const PostDetails = () => {
    return (
      <>
        <div className="page-heading header-text">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                  eaque odit, temporibus quaerat asperiores velit?
                </h1>
                <span>
                  <i className="fa fa-user" /> John Doe &nbsp;|&nbsp;{" "}
                  <i className="fa fa-calendar" /> 27.07.2020 10:10
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="more-info about-info">
          <div className="container">
            <div className="more-info-content">
              <div className="right-content">
                <div>
                  <img
                    src="assets/images/blog-image-fullscren-1-1920x700.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <br />
                <p>
                  Phasellus convallis mauris sed elementum vulputate. Donec
                  posuere leo sed dui eleifend hendrerit. Sed suscipit suscipit
                  erat, sed vehicula ligula. Aliquam ut sem fermentum sem
                  tincidunt lacinia gravida aliquam nunc. Morbi quis erat
                  imperdiet, molestie nunc ut, accumsan diam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quibusdam nihil magnam magni perferendis sit, inventore maxime
                  architecto ab officia illum vitae veritatis asperiores laborum
                  quaerat ratione omnis, possimus, sunt quae?
                </p>
                <h4>Lorem ipsum dolor sit amet.</h4>
                <br />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Temporibus amet, corporis corrupti quod illum id autem
                  assumenda nostrum quo, odio libero dolorum. Expedita, enim non
                  voluptatibus qui veritatis iste ad? Voluptates natus dolor,
                  minus culpa magnam! Iusto blanditiis beatae laudantium.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Adipisci dolor nemo optio facere impedit fugiat obcaecati
                  blanditiis tempora inventore sapiente beatae aspernatur vitae
                  fuga totam possimus eveniet, praesentium maiores! Dolorum
                  illum voluptates ipsum aspernatur explicabo numquam, aliquid a
                  amet, deleniti eos suscipit totam laudantium excepturi
                  voluptatum fugiat eum nesciunt minus iste, expedita provident
                  temporibus, alias possimus veritatis aut fugit? Eaque.
                </p>
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
                  <span>Suspendisse a ante in neque iaculis lacinia</span>
                </div>
              </div>
              <div className="col-md-12">
                <div className="contact-form">
                  <form id="contact" action="" method="get">
                    <div className="row">
                      <div className="col-lg-6 col-md-12 col-sm-12">
                        <fieldset>
                          <input
                            name="name"
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Full Name"
                            required=""
                          />
                        </fieldset>
                      </div>
                      <div className="col-lg-6 col-md-12 col-sm-12">
                        <fieldset>
                          <input
                            name="email"
                            type="text"
                            className="form-control"
                            id="email"
                            pattern="[^ @]*@[^ @]*"
                            placeholder="E-Mail Address"
                            required=""
                          />
                        </fieldset>
                      </div>
                      <div className="col-lg-12">
                        <fieldset>
                          <textarea
                            name="message"
                            rows={6}
                            className="form-control"
                            id="message"
                            placeholder="Your Message"
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