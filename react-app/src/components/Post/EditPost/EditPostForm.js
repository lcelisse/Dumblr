import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useModal } from "../../../context/Modal";
import {
  deletePostThunk,
  readAllPostThunk,
  updatePostThunk,
} from "../../../store/post";

const EditPostForm = ({ eachPost, setShowModal }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [posts, setPost] = useState(eachPost.body);
  const [errors, setErrors] = useState([]);
  const [image, setImage] = useState("");
  const [type, setType] = useState("text");
  const [loading, setLoading] = useState(false);

  const { closeModal } = useModal();
  const uploadImg = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  // useEffect(() => {
  //   if (posts.length < 10)
  //     errors.push("Post must have a minimum of 10 characters");
  //   if (posts.length > 475)
  //     errors.push("Post must not have a maximum of 475 characters");

  //   setErrors(errors);
  // }, [posts]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = [];
    if (posts) {
      if (posts.length > 475)
        errors.push("Your comment must be less than 475 characters");
      if (posts.length < 1 && !image) errors.push("Cannot submit empty");
    } else {
      console.log("");
    }

    if (errors.length > 0) {
      setErrors(errors);
      return;
    }
    if (!errors.length) {
      await dispatch(updatePostThunk(type, posts, image, eachPost.id))
        .then(() => {
          setLoading(false);
          setShowModal(false);
        })
        .catch((error) => {
          setErrors(error);
        });
      await dispatch(readAllPostThunk());

      closeModal();
    }
  };

  return (
    <div className="edit-post-form-container">
      <div className="form-for-create-post">
        <form onSubmit={handleSubmit} className="form-create">
          <label className="post-type-choose">
            <div className="image-types"></div>
            <label className="text-icon-create-post">
              <i class="fa-sharp fa-solid fa-font"></i>
              <input
                name="type"
                type="radio"
                checked={type === "text"}
                value="text"
                onChange={(e) => setType(e.target.value)}
              />
            </label>
            <label className="image-icon-create-post">
              <i class="fa-regular fa-camera"></i>
              <input
                name="type"
                type="radio"
                checked={type === "photo"}
                value="photo"
                onChange={(e) => setType(e.target.value)}
              ></input>
            </label>
            <label>
              <textarea
                name="post"
                onChange={(e) => {
                  const postText = e.target.value;
                  setPost(postText);

                  if (postText.length < 1) {
                    setErrors([...errors, "Post cannot be empty"]);
                  } else if (postText.length > 475) {
                    setErrors([
                      ...errors,
                      "Post must not have a maximum of 475 characters",
                    ]);
                  } else {
                    setErrors([]);
                  }
                }}
                className="post-text"
                value={posts}
              ></textarea>
            </label>
            {type === "photo" && (
              <label>
                <input
                  name="image"
                  type="file"
                  accept="image/*"
                  onChange={uploadImg}
                />
              </label>
            )}
            <button disabled={loading} type="submit">
              {loading ? "Your Image is Loading ...." : "Edit Your Post"}
            </button>
            {/* If there are validation errors, notify the user */}
          </label>
        </form>
        {errors?.length > 0 && (
          <div className="errors">
            {errors.map((e) => (
              <div className="error">{e}</div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default EditPostForm;
