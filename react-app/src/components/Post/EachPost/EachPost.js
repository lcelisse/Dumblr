const EachPost = ({ eachPost }) => {
  return (
    <div className="single-post-container">
      <div className="single-post-left-side">{eachPost.title}</div>
      <div className="single-post-right-side"></div>
    </div>
  );
};

export default EachPost;
