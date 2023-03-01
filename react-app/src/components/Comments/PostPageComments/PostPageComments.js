import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { readPostCommentsThunk } from "../../../store/comment";

import CreateComment from "../CreateComment/CreateComment";
import PostComment from "../PostComment/PostComment";
import "./PostPageComments.css";

const PostPageComments = ({
  eachPost,
  click,
  clickComment,
  setClickComment,
}) => {
  const dispatch = useDispatch();

  const postComments = useSelector((state) => state.comment[eachPost.id]);
  useEffect(() => {
    if (eachPost?.id) {
      dispatch(readPostCommentsThunk(eachPost.id));
    }
  }, []);
  const currentUser = useSelector((state) => state.session.user);
  if (click === true) {
    setClickComment("add-a-comment");
  } else {
    setClickComment("add-a-comment-clicked");
  }

  return (
    <>
      {currentUser !== null && (
        <div className={clickComment}>
          <CreateComment
            postId={eachPost.id}
            click={click}
            clickComment={clickComment}
            setClickComment={setClickComment}
          />
        </div>
      )}
      <div className="all-comments-section-container">
        {/* 
      <div className="post-comment"></div> */}
        <div className={clickComment}>
          {/* render all the comments under each post */}
          {postComments?.map((comment) => {
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
    </>
  );
};

export default PostPageComments;
