import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import {
  createCommentThunk,
  readPostCommentsThunk,
} from "../../../store/comment";
import EachPost from "../../Post/EachPost/EachPost";
import CreateComment from "../CreateComment/CreateComment";
import PostComment from "../PostComment/PostComment";
import "./PostPageComments.css";

const PostPageComments = ({ eachPost }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const postComments = useSelector((state) => state.comment[eachPost.id]);
  useEffect(() => {
    if (eachPost?.id) {
      dispatch(readPostCommentsThunk(eachPost.id));
    }
  }, []);
  const currentUser = useSelector((state) => state.session.user);

  return (
    <>
      {currentUser !== null && (
        <div className="add-a-comment">
          <CreateComment postId={eachPost.id} />
        </div>
      )}
      <div className="all-comments-section-container">
        {/* 
      <div className="post-comment"></div> */}
        <div className="all-comments">
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
