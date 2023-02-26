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
  const currentUser = useSelector((state) => state.session.user);
  const [isOpen, setIsOpen] = useState(false);

  // const createComment = async (com) => {
  //   let errors = [];

  //   dispatch(createCommentThunk(eachPost.id, com));
  // };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {currentUser !== null ? (
        <div>
          {/* <button onClick={handleClick}>
            <i class="fa-sharp fa-regular fa-comment"></i>
          </button> */}
          {/* {isOpen && ( */}
          {/* <CreateComment createComment={createComment} /> */}
          <div className="post-comment-container">
            <div className="little-pop-up-nav"></div>

            <div className="create-a-comment-input">
              <div className="input-comment">
                <div className="input-and-submit">
                  <div className="input-to-the-comments"></div>
                </div>
              </div>
            </div>
            <div className="view-the-comments-container">
              <div className="comment-container-box">
                <div className="the-original-poster">
                  <span>☆ Orginal Poster</span>
                </div>
                <div className="username-for-comment">
                  {comment.user.username}
                </div>
                <div className="the-comment-for-the-comment">
                  {comment.comment}
                </div>
              </div>

              <div className="delte-your-comment-container">
                {currentUser.id === comment.user_id ? (
                  <div className="delete-button">
                    <button
                      onClick={() =>
                        dispatch(
                          deleteCommentThunk({
                            commentId: comment.id,
                            postId: comment.post_id,
                          })
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
          {/* )} */}
        </div>
      ) : (
        <div className="post-comment-container">
          <div className="little-pop-up-nav"></div>
          <div className="create-a-comment-input">
            <div className="input-comment">
              <div className="input-and-submit">
                {/* <div className="input-to-the-comments">
                  <CreateComment
                    createComment={createComment}
                    comment={comment}
                    eachPost={eachPost}
                  />
                </div> */}
              </div>
            </div>
          </div>
          <div className="view-the-comments-container">
            <div className="comment-container-box">
              <div className="the-original-poster">
                <span>☆ Orginial Poster</span>
              </div>
              <div className="username-for-comment">
                {comment.user.username}
              </div>
              <div className="the-comment-for-the-comment">
                {comment.comment}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PostComment;
