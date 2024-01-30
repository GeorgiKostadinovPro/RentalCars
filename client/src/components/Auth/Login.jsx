import { Link } from 'react-router-dom'
import { Path } from '../../utilities/Path'

import './AuthForms.css'

export const Login = () => {
    return (
      <div id="form_wrapper">
        <div id="form_left">
          <img src="../../../../public/assets/images/login.jpg" />
        </div>
        <div id="form_right">
          <h1>Login</h1>
          <div className="input_container">
            <i className="fas fa-envelope" />
            <input
              placeholder="Email"
              type="email"
              name="Email"
              id="field_email"
              className="input_field"
            />
          </div>
          <div className="input_container">
            <i className="fas fa-lock" />
            <input
              placeholder="Password"
              type="password"
              name="Password"
              id="field_password"
              className="input_field"
            />
          </div>
          <input
            type="submit"
            defaultValue="Login"
            id="input_submit"
            className="input_field"
          />
          <span id="create_account">
            <Link to={Path.register}>
              Create your account ➡ 
            </Link>
          </span>
        </div>
      </div>
    );
}