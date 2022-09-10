import "./styles.scss";

const InputForm = ({ label, ...otherProps }) => (
  <div className="group">
    {label && (
      <label
        className={`form-input-label ${!!otherProps.value ? "shrink" : ""}`}
      >
        {label}
      </label>
    )}
    <input className="form-input" {...otherProps} />
  </div>
);

export default InputForm;
