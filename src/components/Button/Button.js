import { BaseButton, InvertedButton, GoogleSignInButton } from './styles';

export const BUTTON_TYPE_CLASSES = {
  base: 'base',
  google: 'google-sign-in',
  invrted: 'inverted',
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.invrted]: InvertedButton,
  }[buttonType]);

const Button = ({ children, buttonTypeClass, ...otherProps }) => {
  const CustomButton = getButton(buttonTypeClass);
  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;
