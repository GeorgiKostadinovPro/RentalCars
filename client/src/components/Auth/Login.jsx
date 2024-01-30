import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

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

  const loginSubmitHandler = (data) => {
    console.log(data);
  };

  return (
    <div id="form_wrapper">
      <div id="form_left">
        <img src="../../../../public/assets/images/login.jpg" />
      </div>
      <form id="form_right" onSubmit={handleSubmit(loginSubmitHandler)}>
        <h1>Login</h1>
          <div className="input_container">
            <i className="fas fa-envelope" />
            <input 
              {...register('email', 
                {
                  required: 'This field is required!', 
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/g,
                    message: 'This email is invalid!'
                  }
                })}
              placeholder="Email"
              type="email"
              className="input_field"
              autoComplete='email'
            />
        </div>
        <span style={{ display: errors.email?.message ? 'block' : 'none', color: 'red' }}>
          {errors.email?.message}
        </span>
        <div className="input_container">
            <i className="fas fa-lock" />
            <input
              {...register('password', 
                {
                  required: 'This field is required!', 
                  pattern: {
                    value: /[A-z]+[0-9]+\W+/g,
                    message: 'This password is invalid!'
                  },
                  minLength: {
                    value: 5,
                    message: 'The minimal length is 5!'
                  }
                })}
              placeholder="Password"
              type="password"
              className="input_field"
              autoComplete='password'
            />
        </div>
        <span style={{ display: errors.password?.message ? 'block' : 'none', color: 'red' }}>
          {errors.password?.message}
        </span>
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
      </form>
    </div>
  );
}