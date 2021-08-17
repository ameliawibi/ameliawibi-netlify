import "./Field.css";
import PropTypes from "prop-types";

/* eslint-disable react/jsx-props-no-spreading */
const Input = ({ label, name, register, required, placeholder }) => (
  <>
    <label className="Label">
      {label}
      <input
        className="Field"
        name={name}
        type="text"
        id={name}
        placeholder={placeholder}
        {...register(name, { required })}
      />
    </label>
  </>
);

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  register: PropTypes.func,
  placeholder: PropTypes.string.isRequired,
};

Input.defaultProps = {
  required: false,
  // eslint-disable-next-line no-console
  register: console.log,
};
export default Input;
