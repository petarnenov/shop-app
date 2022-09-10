import "./styles.scss";

export const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  invrted: "inverted",
};

const Button = ({ children, buttonTypeClass, ...otherProps }) => (
  <button className={`button-container ${buttonTypeClass}`} {...otherProps}>
    {children}
  </button>
);

export default Button;
