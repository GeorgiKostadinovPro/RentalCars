import { useState, useEffect } from 'react'

import { Loading } from '../../Common/Loading'

import './BadRequest.css'

export const BadRequest = ({ error, resetErrorBoundary}) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    let timeout = setTimeout(() => setShow(false), 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      {show ? (
        <Loading />
      ) : (
        <div id="error-boundary">
          <div className="error-boundary">
            <div className="error-boundary-bg">
              <div />
              <div />
              <div />
            </div>
            <h1>oops!</h1>
            <h2>Something went wrong!</h2>
            <a type="submit" onClick={resetErrorBoundary}>
              Try again
            </a>
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
      )}
    </>
  );
}