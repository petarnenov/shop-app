import SignUpForm from "../../components/SignUpForm/SignUpForm";
import SignInForm from "../../components/SignInForm/SignInForm";

import "./styles.scss";

const Auth = () => {
  return (
    <div className="auth-container">
      <div className="sign-forms">
        <SignInForm />
        <SignUpForm />
      </div>
    </div>
  );
};

export default Auth;
