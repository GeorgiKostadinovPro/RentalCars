import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import * as authService from '../../services/authService'
import { Constants } from '../../utilities/constants'
import { Path } from '../../utilities/Path' 

import './AuthForms.css'

const defaultValues = {
  email: '',
  password: ''
};

export const Login = () => {
  const { 
    register, 
    handleSubmit,
    formState: { errors } 
  } = useForm(defaultValues);
  
  const navigate = useNavigate();

  const loginSubmitHandler = async (data) => {
    await authService.login(data);

    navigate(Path.home);
  };

  return (
    <div id="form_wrapper">
      <div id="form_left">
        <img src="../../../../public/assets/images/login.jpg" />
      </div>
      <form id="form_right" onSubmit={handleSubmit(loginSubmitHandler)}>
        <h1>Login</h1>
        <div>
          <div className="input_container">
            <i className="fas fa-envelope" />
            <input
              {...register("email", Constants.email)}
              placeholder="Email"
              type="email"
              className="input_field"
              autoComplete="email"
            />
          </div>
          <span
            style={{
              display: errors.email?.message ? "block" : "none",
              color: "red",
            }}
          >
            {errors.email?.message}
          </span>
        </div>
        <div>
          <div className="input_container">
            <i className="fas fa-lock" />
            <input
              {...register("password", Constants.password)}
              placeholder="Password"
              type="password"
              className="input_field"
              autoComplete="password"
            />
          </div>
          <span
            style={{
              display: errors.password?.message ? "block" : "none",
              color: "red",
            }}
          >
            {errors.password?.message}
          </span>
        </div>
        <input
          type="submit"
          defaultValue="Login"
          id="input_submit"
          className="input_field"
        />
        <span id="create_account">
          <Link to={Path.register}>Create your account ➡</Link>
        </span>
      </form>
    </div>
  );
}