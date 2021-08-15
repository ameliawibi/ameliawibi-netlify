import PropTypes from "prop-types";

function Post(props) {
  const { title, desc, author } = props;
  return (
    <div>
      <p>{title}</p>
      <p>{desc}</p>
      <p>{author}</p>
    </div>
  );
}

Post.propTypes = {
  title: PropTypes.oneOf(["Loading", "Ready"]),
  desc: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  author: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  ).isRequired,
};

export default Post;
