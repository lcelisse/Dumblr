import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deletePostThunk, updatePostThunk } from "../../../store/post";

const EditPostForm = ({ post, setShowModal }) => {
  const dispatch = useDispatch();
  const [posts, setPost] = useState(post.post);
  const [errors, setErrors] = useState([]);

  const deletePost = () => {
    setPost("");
    dispatch(deletePostThunk(post.id));
  };

  useEffect(() => {
    if (posts.length < 10)
      errors.push("Post must have a minimum of 10 characters");
    if (posts.length > 475)
      errors.push("Post must not have a maximum of 475 characters");

    setErrors(errors);
  }, [posts]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await dispatch(updatePostThunk(post.id, post.type, posts)).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) errors.push(data.erros);
        setErrors(errors);
      }
    );
    if (errors.length <= 0) {
      setShowModal(false);
    }
  };

  return (
    <div className="edit-post-form-container">
      <div className="edit-post-form">
        <form onSubmit={handleSubmit} className="form-container">
          <label>
            <textarea
              name="posts"
              onChange={(e) => {
                setPost(e.target.value);
              }}
              className="post-text"
              value={posts}
            ></textarea>
          </label>
          <button type="submit" disabled={!!errors.length}>
            Edit Your Post
          </button>
          <button onClick={deletePost}>Delet Your Post</button>
        </form>
      </div>
    </div>
  );
};

export default EditPostForm;
