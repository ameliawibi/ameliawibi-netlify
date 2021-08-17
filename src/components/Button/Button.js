import "./Button.css";
import PropTypes from "prop-types";

export const PRIMARY = "primary";
export const SECONDARY = "secondary";

const Button = ({ variant, disabled, onClick, children, type }) => {
  const buttonClassName = [variant];
  if (disabled === true) {
    buttonClassName.push("disabled");
  }
  /* eslint-disable react/button-has-type */
  return (
    <div className="Btn">
      <button
        className={buttonClassName.join(" ")}
        disabled={disabled}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </div>
  );
};
Button.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf([PRIMARY, SECONDARY]),
  type: PropTypes.oneOf(["submit", "reset", "button"]),
};

Button.defaultProps = {
  children: "test",
  disabled: false,
  variant: PRIMARY,
  type: "button",
  // eslint-disable-next-line no-console
  onClick: console.log,
};

export default Button;
