import "./Button.css";
import PropTypes from "prop-types";

const Button = ({ disabled, onClick, children }) => {
  const buttonClassName = [];
  if (disabled === true) {
    buttonClassName.push("disabled");
  }
  return (
    <div className="Btn">
      <button
        className={buttonClassName.join(" ")}
        disabled={disabled}
        onClick={onClick}
        type="button"
      >
        {children}
      </button>
    </div>
  );
};
Button.propTypes = {
  children: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  children: "test",
  disabled: false,
  // eslint-disable-next-line no-console
  onClick: console.log,
};

export default Button;
