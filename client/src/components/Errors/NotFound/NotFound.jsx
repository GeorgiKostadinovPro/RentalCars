import { Link } from 'react-router-dom'

import { Path } from '../../../utilities/Path'
 
import './NotFound.css'

export const NotFound = () => {
    return (
      <section className='not-found'>
        <div className="container">
          <div className="text">
            <h1>Page Not Found</h1>
            <p>
              We can't seem to find the page you're looking for. Please check
              the URL for any typos.
            </p>
            <ul className="menu">
              <li>
                <Link to={Path.home}>
                  Go to Homepage
                </Link>
              </li>
              <li>
                <Link to={Path.blog}>
                  Visit our Blog
                </Link>
              </li>
              <li>
                <Link to={Path.contact}>
                  Contact support
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <img
              className="image"
              src="https://omjsblog.files.wordpress.com/2023/07/errorimg.png"
              alt=""
            />
          </div>
        </div>
      </section>
    );
}