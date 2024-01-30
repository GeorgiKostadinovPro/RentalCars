import { Link } from 'react-router-dom'
import { Path } from '../../utilities/Path'

import './AuthForms.css'

export const Register = () => {
  return (
    <div id="form_wrapper">
      <div id="form_right">
        <h1>Register</h1>
        <div className="input_container">
          <i className="fas fa-user" />
          <input
            placeholder="Username"
            type="username"
            name="Username"
            className="input_field"
          />
        </div>
        <div className="input_container">
          <i className="fas fa-envelope" />
          <input
            placeholder="Email"
            type="email"
            name="Email"
            className="input_field"
          />
        </div>
        <div className="input_container">
          <i className="fas fa-lock" />
          <input
            placeholder="Password"
            type="password"
            name="Password"
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
          <Link to={Path.login}>
            Already have an account ➡ 
          </Link>
        </span>
      </div>
      <div id="form_left">
        <img src="../../../../public/assets/images/login.jpg" />
      </div>
    </div>
  );
}