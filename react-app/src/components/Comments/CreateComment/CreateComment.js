import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createCommentThunk,
  readPostCommentsThunk,
} from "../../../store/comment";

const CreateComment = ({ postId }) => {
  const dispatch = useDispatch();
  const [theComment, setTheComment] = useState("");
  const [errors, setErrors] = useState([]);
  const userId = useSelector((state) => state.session.user.id);

  // useEffect(() => {
  //   dispatch(readPostCommentsThunk(eachPost.user_id));
  // }, [dispatch, eachPost.user_id]);

  const createComment = async (e) => {
    e.preventDefault();
    setErrors([]);

    const errors = [];
    if (theComment.length > 475)
      errors.push("Your comment must be less than 475 characters");
    if (theComment.length < 1) errors.push("Cannot submit empty");

    if (errors.length > 0) {
      setErrors(errors);
      return;
    }
    dispatch(createCommentThunk(userId, postId, theComment));

    setTheComment("");
  };

  return (
    <div className="create-comment-container">
      <div className="create-comment-form-container">
        <div className="input-and-submit">
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
              <input type="submit" onClick={createComment} />
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
