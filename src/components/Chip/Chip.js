import "./Chip.css";
import PropTypes from "prop-types";

const Chip = ({ link, children }) => (
  <a href={link} rel="noopener noreferrer" target="_blank" className="Chip">
    {children}
  </a>
);
Chip.propTypes = {
  link: PropTypes.string,
  children: PropTypes.string.isRequired,
};

Chip.defaultProps = {
  link: "/",
};

export default Chip;
