import { Component, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPostThunk } from "../../../store/post";
import "./CreatePostForm.css";

const CreatePostForm = ({ setShowModal }) => {
  console.log("i made it in !");
  let dispatch = useDispatch();

  const currentUser = useSelector((state) => console.log(state.session.user));

  const [post, setPost] = useState("");
  const [image, setImage] = useState("");
  const [type, setType] = useState("Text");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    if (post.length < 10)
      errors.push("Post must have a minimum of 10 characters");
    if (post.length > 475)
      errors.push("Post must not have a maximum of 475 characters");

    setErrors(errors);
  }, [post, type, errors]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    if (!errors.length) {
      const img = new FormData();
      img.append("image", image);
      await dispatch(createPostThunk(type, post, img)).catch(async (res) => {
        const data = await res.json;

        if (data && data.errors) {
          setLoading(false);
        }
      });
      if (!errors.length) {
        setLoading(false);
        setShowModal(false);
      }
    }
  };

  const uploadImg = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  return (
    <div className="create-post-form-container">
      <div className="username-create-post-form">{currentUser}</div>
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
                checked={type === "image"}
                value="image"
                onChange={(e) => setType(e.target.value)}
              ></input>
            </label>
            <label>
              <textarea
                name="post"
                onChange={(e) => {
                  setPost(e.target.value);
                }}
                className="post-text"
                value={post}
              ></textarea>
            </label>
            {type === "image" && (
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
          </label>
        </form>
      </div>
      <div className="errors"></div>
    </div>
  );
};

export default CreatePostForm;
