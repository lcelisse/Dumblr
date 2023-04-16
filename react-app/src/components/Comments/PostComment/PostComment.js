import { useDispatch, useSelector } from "react-redux";

import { deleteCommentThunk } from "../../../store/comment";

import "./PostComment.css";

const PostComment = ({ comment, eachPost }) => {
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.session.user);

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
                  {/* <Link
                    className="link-for-username"
                    to={`/users/${comment.user.id}`}
                  > */}
                  {comment.user.username}
                  {/* </Link> */}
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
                {/* <Link
                  className="link-for-username"
                  to={`/users/${comment.user.id}`}
                > */}
                {comment.user.username}
                {/* </Link> */}
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
