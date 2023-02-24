import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  createCommentThunk,
  readPostCommentsThunk,
} from "../../../store/comment";

const CreateComment = ({ createComment, comment, eachPost }) => {
  const dispatch = useDispatch();
  const [theComment, setTheComment] = useState("");
  const [errors, setErrors] = useState([]);

  //   useEffect(() => {
  //     dispatch(readPostCommentsThunk(eachPost.user_id));
  //   }, [dispatch, eachPost.user_id]);
  return (
    <div className="create-comment-container">
      <div className="create-comment-form-container">
        <div className="input-and-submit">
          <div className="input-to-the-comments">
            <form className="comment-form-container" type="submit">
              <input
                placeholder="Reply Your Heart Out"
                value={theComment}
                onChange={(e) => setTheComment(e.target.value)}
              ></input>
            </form>
          </div>
          <button
            type="submit"
            className="the-button-reply"
            onClick={async () => {
              const res = await createComment(theComment);
              console.log("res in the create", theComment);
              if (res && res.errors && res.errors.length) {
                setErrors(res.errors);
              }
            }}
          >
            Reply
          </button>
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
