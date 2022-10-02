import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUpStart } from '../../store/user/userAction';
import Button from '../Button/Button';
import InputForm from '../InputForm/InputForm';

import './styles.scss';

const initFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(initFormFields);
  const [error, setError] = useState(false);

  const { displayName, email, password, confirmPassword } = formFields;

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    // TODO: set request with state values
    try {
      if (password !== confirmPassword) {
        throw Error('email or password incorect');
      }
      dispatch(signUpStart(email, password));
      setError(null);
      setFormFields(initFormFields);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleChange = (ev) => {
    ev.preventDefault();
    const {
      target: { name, value },
    } = ev;
    setFormFields((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign Up with email and password</span>
      <form onSubmit={handleSubmit}>
        <InputForm
          label="Display Name"
          required
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
        />
        <InputForm
          label="Email"
          required
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <InputForm
          label="Password"
          required
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
        />
        <InputForm
          label="Confirm Password"
          required
          name="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={handleChange}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
