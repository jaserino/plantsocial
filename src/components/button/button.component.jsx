import "./button.styles.scss";

const BUTTON_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ children, buttonClasses, ...otherProps }) => {
  return (
    <button
      className={`button-container ${BUTTON_CLASSES[buttonClasses]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
