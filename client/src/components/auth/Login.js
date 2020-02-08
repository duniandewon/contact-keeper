import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';

const Login = props => {
  const { login, error, clearErrors, isAuthenticated } = useContext(
    AuthContext
  );

  const { setAlert } = useContext(AlertContext);

  const [User, setUser] = useState({
    email: '',
    password: ''
  });

  const { email, password } = User;

  const onChange = e => setUser({ ...User, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (email === '') {
      setAlert("Email shouldn't be emapty", 'danger');
    } else if (password === '') {
      setAlert("Password shouldn't be emapty", 'danger');
    } else {
      login({ email, password });
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }
    if (error === 'invalid credentials') {
      setAlert(error, 'danger');
      clearErrors();
    }
  }, [error, isAuthenticated, props.history]);
  return (
    <div className='form-container'>
      <h1>
        Account <span className='text-primary'>Login</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' value={email} onChange={onChange} />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            value={password}
            onChange={onChange}
          />
        </div>
        <input
          type='submit'
          value='Login'
          className='btn btn-primary btn-block'
        />
      </form>
    </div>
  );
};

export default Login;
