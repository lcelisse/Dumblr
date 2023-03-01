import { useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../../context/Modal";
import { readAllPostThunk, updatePostThunk } from "../../../store/post";

const EditPostForm = ({ eachPost, setShowModal }) => {
  const dispatch = useDispatch();
  const [posts, setPost] = useState(eachPost.body || "");
  const [errors, setErrors] = useState([]);
  const [image, setImage] = useState("");
  const [type, setType] = useState("text");
  const [loading, setLoading] = useState(false);

  const { closeModal } = useModal();
  const uploadImg = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = [];
    if (posts.length > 475)
      errors.push("Post must not exceed 475 characters .");
    if (posts.length < 1 && !image) errors.push("Cannot submit empty");

    if (errors.length > 0) {
      setErrors(errors);
      return;
    }
    setLoading(true);

    if (!errors.length) {
      await dispatch(updatePostThunk(type, posts, image, eachPost.id))
        .then(() => {
          setLoading(false);
          setShowModal(false);
        })
        .catch((error) => {
          setErrors(error);
        });
    }
    await dispatch(readAllPostThunk());
    closeModal();
  };

  return (
    <div className="edit-post-form-container">
      <div className="form-for-create-post">
        <form onSubmit={handleSubmit} className="form-create">
          <label className="post-type-choose">
            <div className="image-types"></div>
            <h5>
              To make a post you must have some sort of text or an image ..
              chosse below
            </h5>
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
                      "Post must not exceed 475 characters .",
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
