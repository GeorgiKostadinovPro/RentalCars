import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import { useAuthContext } from '../../../hooks/useAuthContext'
import { Constants } from '../../../utilities/constants'
import { Path } from '../../../utilities/Path'

import '../AuthForms.css'

const defaultValues = {
  email: '',
  password: '',
  confirmPassword: ''
};

export const Register = () => {
  const { registerSubmitHandler } = useAuthContext();

  const { 
    register,
    handleSubmit,
    watch,
    formState: { errors }  
  } = useForm({defaultValues, mode: 'onChange'});

  return (
    <div id="form_wrapper">
      <form id="form_right" onSubmit={handleSubmit(registerSubmitHandler)}>
        <h1>Register</h1>
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
        <div>
          <div className="input_container">
            <i className="fas fa-repeat"></i>
            <input
              {...register("confirmPassword", {
                ...Constants.password,
                validate: (confirmPassword) => {
                  if (watch("password") != confirmPassword) {
                    return "Your passwords do NOT match!";
                  }
                }
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
          <Link to={Path.login}>Already have an account <i className="fa-solid fa-arrow-right"></i></Link>
        </span>
      </form>
      <div id="form_left">
        <img src="assets/images/login.jpg" />
      </div>
    </div>
  );
}