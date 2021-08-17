import "./Field.css";
import PropTypes from "prop-types";

/* eslint-disable react/jsx-props-no-spreading */
const Textarea = ({ label, name, register, required, placeholder, rows }) => (
  <>
    <label className="Label">
      {label}
      <textarea
        className="Field"
        name={name}
        id={name}
        placeholder={placeholder}
        rows={rows}
        {...register(name, { required })}
      />
    </label>
  </>
);

Textarea.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  register: PropTypes.func,
  placeholder: PropTypes.string.isRequired,
  rows: PropTypes.number,
};

Textarea.defaultProps = {
  required: false,
  rows: 6,
  // eslint-disable-next-line no-console
  register: console.log,
};
export default Textarea;
