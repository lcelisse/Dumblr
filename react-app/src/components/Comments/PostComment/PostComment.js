import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { deleteCommentThunk } from "../../../store/comment";

import "./PostComment.css";

const PostComment = ({ comment, eachPost }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const currentUser = useSelector((state) => state.session.user);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {currentUser !== null ? ( //the user is not null
        <div className="drop-down-menu">
          <div className="post-comment-container">
            <div className="little-pop-up-nav"></div>
            <div className="view-the-comments-container">
              <div className="comment-container-box">
                <div className="the-original-poster"></div>
                <div className="username-for-comment">
                  {comment.user.username}
                </div>
                <div className="the-comment-for-the-comment">
                  {comment.comment}
                </div>
              </div>

              <div className="delte-your-comment-container">
                {currentUser.id === comment.user_id ? ( //the owner of the post
                  <div className="delete-button">
                    <button
                      className="delete-button"
                      onClick={() =>
                        dispatch(
                          deleteCommentThunk({
                            commentId: comment.id,
                            postId: comment.post_id,
                          })
                        )
                      }
                    >
                      <i class="fa-solid fa-trash-can"></i>
                    </button>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        //the user is null

        <div className="post-comment-container">
          <div className="little-pop-up-nav"></div>
          <div className="view-the-comments-container">
            <div className="comment-container-box">
              <div className="the-original-poster"></div>
              <div className="username-for-comment">
                {comment.user.username}
              </div>
              <div className="the-comment-for-the-comment">
                {comment.comment}
              </div>
            </div>
          </div>
        </div>

        /*the end of it*/
      )}
    </>
  );
};

export default PostComment;
