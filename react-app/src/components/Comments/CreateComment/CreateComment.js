import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCommentThunk } from "../../../store/comment";

const CreateComment = ({ postId, click, clickComment, setClickComment }) => {
  const dispatch = useDispatch();
  const [theComment, setTheComment] = useState("");
  const [errors, setErrors] = useState([]);
  const userId = useSelector((state) => state.session.user.id);
  const createComment = async (e) => {
    e.preventDefault();
    setErrors([]);

    const errors = [];
    if (theComment.length > 475)
      errors.push("Post must not exceed 475 characters .");
    if (theComment.length < 1) errors.push("Cannot submit empty");

    if (errors.length > 0) {
      setErrors(errors);
      return;
    }
    dispatch(createCommentThunk(userId, postId, theComment));

    setTheComment("");
  };

  if (click === true) {
    setClickComment("input-and-submit");
  } else {
    setClickComment("input-and-submit-clicked");
  }

  return (
    <div className="create-comment-container">
      <div className="create-comment-form-container">
        <div className={clickComment}>
          <div className="input-to-the-comments">
            <form
              className="comment-form-container"
              type="submit"
              onSubmit={createComment}
            >
              <textarea
                className="input-container-style"
                type="text"
                placeholder="Reply Your Heart Out"
                value={theComment}
                onChange={(e) => setTheComment(e.target.value)}
              ></textarea>
              <button
                type="submit"
                onClick={createComment}
                className="create-button-css"
              >
                Submit
              </button>
            </form>
          </div>

          <ul className="errors">
            {errors.map((error, id) => (
              <li key={id}>{error}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CreateComment;
