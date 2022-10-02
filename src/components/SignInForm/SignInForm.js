import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  emailSignInStart,
  googleSignInStart,
  googleSignInWithRedirectStart,
} from '../../store/user/userAction';
import Button, { BUTTON_TYPE_CLASSES } from '../Button/Button';
import InputForm from '../InputForm/InputForm';

import './styles.scss';

const initFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(initFormFields);
  const [error] = useState(false);

  const { email, password } = formFields;

  const handleSubmit = (ev) => {
    ev.preventDefault();
    dispatch(emailSignInStart(email, password));
    setFormFields(initFormFields);
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
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign In with email and password</span>
      <form onSubmit={handleSubmit}>
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
        <Button type="submit">Sign In</Button>
        <div className="buttons-container">
          <Button
            onClick={() => dispatch(googleSignInStart())}
            buttonTypeClass={BUTTON_TYPE_CLASSES.google}
            type="button"
          >
            SignIn with Google Popup
          </Button>
          <Button
            onClick={() => dispatch(googleSignInWithRedirectStart())}
            buttonTypeClass={BUTTON_TYPE_CLASSES.google}
            type="button"
          >
            SignIn with Google Redirect
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
