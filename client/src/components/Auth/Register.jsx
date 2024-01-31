import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import * as authService from '../../services/authService'
import { Path } from '../../utilities/Path'

import './AuthForms.css'

const defaultValues = {
  email: '',
  password: '',
  confirmPassword: ''
} ;

export const Register = () => {
  const { 
    register,
    handleSubmit,
    watch,
    formState: { errors }  
  } = useForm(defaultValues);

  const navigate = useNavigate();

  const registerSubmitHandler = async (data) => {
    await authService.register(data);

    navigate(Path.home);
  };

  return (
    <div id="form_wrapper">
      <form id="form_right" onSubmit={handleSubmit(registerSubmitHandler)}>
        <h1>Register</h1>
        <div>
          <div className="input_container">
            <i className="fas fa-envelope" />
            <input
              {...register("email", {
                required: "This field is required!",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/g,
                  message: "This email is invalid!",
                },
              })}
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
              {...register("password", {
                required: "This field is required!",
                pattern: {
                  value: /[A-z]+[0-9]+\W+/g,
                  message: "This password is invalid!",
                },
                minLength: {
                  value: 5,
                  message: "The minimal length is 5!",
                },
              })}
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
        <div>
          <div className="input_container">
            <i className="fas fa-repeat"></i>
            <input
              {...register("confirmPassword", {
                required: "This field is required!",
                pattern: {
                  value: /[A-z]+[0-9]+\W+/g,
                  message: "This password is invalid!",
                },
                minLength: {
                  value: 5,
                  message: "The minimal length is 5!",
                },
                validate: (confirmPassword) => {
                  if (watch("password") != confirmPassword) {
                    return "Your passwords do NOT match!";
                  }
                },
              })}
              placeholder="Confirm Password"
              type="password"
              className="input_field"
              autoComplete="confirm-password"
            />
          </div>
          <span
            style={{
              display: errors.confirmPassword?.message ? "block" : "none",
              color: "red",
            }}
          >
            {errors.confirmPassword?.message}
          </span>
        </div>
        <input
          type="submit"
          defaultValue="Login"
          id="input_submit"
          className="input_field"
        />
        <span id="create_account">
          <Link to={Path.login}>Already have an account ➡</Link>
        </span>
      </form>
      <div id="form_left">
        <img src="../../../../public/assets/images/login.jpg" />
      </div>
    </div>
  );
}