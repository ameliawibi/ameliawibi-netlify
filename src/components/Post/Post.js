function Post(props) {
  /* eslint-disable react/prop-types */
  const { title, desc, author } = props;
  return (
    <div>
      <p>{title}</p>
      <p>{desc}</p>
      <p>{author}</p>
    </div>
  );
}

export default Post;
