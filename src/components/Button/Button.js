import {
  BaseButton,
  InvertedButton,
  GoogleSignInButton,
  ButtonSpinner,
} from './styles';

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

const Button = ({ children, buttonTypeClass, isLoading, ...otherProps }) => {
  const CustomButton = getButton(buttonTypeClass);
  return (
    <CustomButton disabled={isLoading} {...otherProps}>
      {isLoading ? <ButtonSpinner /> : children}
    </CustomButton>
  );
};

export default Button;
