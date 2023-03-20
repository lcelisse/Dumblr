import { useState } from "react";
import { useDispatch } from "react-redux";

import { createPostThunk } from "../../../store/post";
import { useModal } from "../../../context/Modal";
import "./CreatePostForm.css";

const CreatePostForm = ({ setShowModal }) => {
  let dispatch = useDispatch();
  const { closeModal } = useModal();

  const [post, setPost] = useState("");
  const [image, setImage] = useState("");
  const [type, setType] = useState("Text");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  const scrollToBottom = () => {
    window.scrollTo(0, 1000000);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = [];
    if (post.length > 475) errors.push("Post must not exceed 475 characters .");
    if (post.length < 1 && !image) errors.push("Cannot submit empty");

    if (errors.length > 0) {
      setErrors(errors);
      return;
    }
    setLoading(true);

    if (!errors.length) {
      await dispatch(createPostThunk(type, post, image))
        .then(() => {
          setLoading(false);
          setShowModal(false);
        })
        .catch((error) => {
          setErrors(error);
        });
    }
    closeModal();
    scrollToBottom();
  };

  const uploadImg = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  return (
    <div className="create-post-form-container">
      <div className="form-for-create-post">
        <form onSubmit={handleSubmit} className="form-create">
          <label className="post-type-choose">
            <div className="image-types"></div>

            <label className="text-icon-create-post">
              <p>
                <i class="fa-light fa-comment-text"></i>Text
              </p>
              <input
                name="type"
                type="radio"
                checked={type === "text"}
                value="text"
                onChange={(e) => setType(e.target.value)}
              />
            </label>
            <label className="image-icon-create-post">
              <p>
                <i class="fa-solid fa-camera"></i>
              </p>
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
                placeholder="Type your heart out"
                onChange={(e) => {
                  const postText = e.target.value;
                  setPost(postText);

                  if (postText.length < 1 && !image) {
                    setErrors([...errors, "Post must have text or an image"]);
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
                value={post}
              ></textarea>
            </label>
            {type === "photo" && (
              <label>
                <input
                  name="image"
                  type="file"
                  accept="image/*"
                  onChange={uploadImg}
                  style={{
                    color: "#00b8ff",
                    marginLeft: "-150px",
                    marginTop: "75px",
                    padding: "0",
                  }}
                />
              </label>
            )}
            <button
              className="button-to-create-css"
              disabled={loading}
              type="submit"
              style={{ marginRight: "50px" }}
            >
              {loading ? "Your Image is Loading ...." : "Create Post"}
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

export default CreatePostForm;
