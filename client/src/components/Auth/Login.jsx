import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import { useAuthContext } from '../../hooks/useAuthContext'
import { Constants } from '../../utilities/constants'
import { Path } from '../../utilities/Path' 

import './AuthForms.css'

const defaultValues = {
  email: '',
  password: ''
};

export const Login = () => {
  const { loginSubmitHandler } = useAuthContext();

  const { 
    register, 
    handleSubmit,
    formState: { errors } 
  } = useForm({defaultValues, mode: 'onChange'});

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
          <Link to={Path.register}>Create your account <i className="fa-solid fa-arrow-right"></i></Link>
        </span>
      </form>
    </div>
  );
}