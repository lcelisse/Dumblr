import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { readPostCommentsThunk } from "../../../store/comment";
import EachPost from "../../Post/EachPost/EachPost";
import PostComment from "../PostComment/PostComment";
import "./PostPageComments.css";

const PostPageComments = ({ eachPost }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const postComments = useSelector((state) => state.comment.post);

  useEffect(() => {
    dispatch(readPostCommentsThunk(eachPost.id));
  }, [dispatch, eachPost.id]);

  const [click, setClick] = useState("comment-section-unclicked");

  const handleClick = () => {
    if (click === "comment-section-clicked") {
      setClick("comment-section-unclicked");
      history.push(`/posts`);
    } else {
      setClick("comment-section-clicked");
      history.push(`/posts/${eachPost.id}/comments`);
    }
  };

  let postCommentsArr;
  if (postComments) postCommentsArr = Object.values(postComments);

  return (
    <div className="all-comments-section-container">
      <div className="add-a-comment"></div>
      <div className="post-comment">
        <button
          onClick={() => {
            handleClick();
          }}
        >
          <i class="fa-sharp fa-regular fa-comment"></i>
        </button>
      </div>
      <div className={click}>
        {postCommentsArr.map((comment) => {
          return (
            <PostComment
              key={comment.id}
              comment={comment}
              eachPost={eachPost}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PostPageComments;
