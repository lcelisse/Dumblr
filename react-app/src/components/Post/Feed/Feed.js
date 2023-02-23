import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { readAllPostThunk } from "../../../store/post";
import EachPost from "../EachPost/EachPost";

const Feed = () => {
  const dispatch = useDispatch();
  const allPosts = useSelector((state) => state.post.allPosts);

  const postArr = Object.values(allPosts);

  useEffect(() => {
    dispatch(readAllPostThunk());
  }, [dispatch]);

  let post;

  if (Object.values(allPosts).length) {
    post = postArr.map((eachPost) => {
      return <EachPost key={eachPost.id} eachPost={eachPost} />;
    });
  }

  if (!Object.values(allPosts).length) return null;

  return (
    <div className="feed-container">
      <div className="feed-left-side"></div>
      <div className="feed-right-side">
        <div className="feed-nav-bar"></div>
        <div className="feed-post">
          <ul className="post">{post}</ul>
        </div>
      </div>
    </div>
  );
};

export default Feed;
