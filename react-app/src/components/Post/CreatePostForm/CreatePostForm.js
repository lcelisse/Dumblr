import { Component, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
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
    if (post.length > 475)
      errors.push("Your comment must be less than 475 characters");
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
            <h5>
              To make a post you must have some sort of text or an image ..
              chosse below
            </h5>
            <label className="text-icon-create-post">
              <p>Some Words</p>
              <input
                name="type"
                type="radio"
                checked={type === "text"}
                value="text"
                onChange={(e) => setType(e.target.value)}
              />
            </label>
            <label className="image-icon-create-post">
              <p>An Image</p>
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
                      "Post must not have a maximum of 475 characters",
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
                />
              </label>
            )}
            <button disabled={loading} type="submit">
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
