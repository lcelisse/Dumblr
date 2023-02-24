import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import {
  readPostCommentsThunk,
  createCommentThunk,
  deleteCommentThunk,
} from "../../../store/comment";

import { readSinglePostThunk } from "../../../store/post";
import EachPost from "../../Post/EachPost/EachPost";
import CreateComment from "../CreateComment/CreateComment";
import "./PostComment.css";

const PostComment = ({ comment, eachPost }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const currentUser = useSelector((state) => state.session.user.id);

  const createComment = async (com) => {
    let errors = [];

    await dispatch(createCommentThunk(eachPost.id, com));
    console.log(com, "im here", eachPost.id);
  };

  return (
    <div className="post-comment-container">
      <div className="little-pop-up-nav"></div>
      <div className="create-a-comment-input">
        <div className="input-comment">
          <div className="input-and-submit">
            <div className="input-to-the-comments">
              <CreateComment
                createComment={createComment}
                comment={comment}
                eachPost={eachPost}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="view-the-comments">
        {comment.comment}
        <div className="delte-your-comment-container">
          {currentUser === comment.user_id ? (
            <div className="delete-button">
              <button
                onClick={() =>
                  dispatch(deleteCommentThunk(comment.id)).then(() =>
                    history.push("/posts")
                  )
                }
              ></button>
              <i class="fa-solid fa-trash-can"></i>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostComment;
