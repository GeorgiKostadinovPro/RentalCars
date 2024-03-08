import './BadRequest.css'

export const BadRequest = () => {
  return (
    <div id="error-boundary">
      <div className="error-boundary">
        <div className="error-boundary-bg">
          <div />
          <div />
          <div />
        </div>
        <h1>oops!</h1>
        <h2>Something went wrong!</h2>
        <a href="#">go back</a>
        <div className="error-boundary-social">
          <a href="#">
            <i className="fa fa-facebook" />
          </a>
          <a href="#">
            <i className="fa fa-instagram" />
          </a>
          <a href="#">
            <i className="fa fa-linkedin" />
          </a>
        </div>
      </div>
    </div>
  );
}