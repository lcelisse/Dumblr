import { useState, React, useEffect, useRef } from "react";

import CreatePostForm from "../CreatePostForm/CreatePostForm";
import "./CreatePost.css";
import OpenModalButton from "../../OpenModalButton/index";

const CreatePost = () => {
  const [showModal, setShowModal] = useState(false);
  const ulRef = useRef();

  useEffect(() => {
    if (!showModal) return;

    const closeMenu = (e) => {
      if (!ulRef.current.contains(e.target)) {
        setShowModal(false);
      }
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showModal]);
  const closeMenu = () => setShowModal(false);
  return (
    <div className="create-post-container">
      <div className="modal-to-create-post">
        <div className="img-create-post">
          <span className="welcome">Welcome !</span>
          <p className="welcome-style">Create a Post Here ⇩</p>
        </div>
        <div className="button-to-create-post">
          <OpenModalButton
            className="create-post-button"
            buttonText="Create Post"
            onItemClick={closeMenu}
            modalComponent={<CreatePostForm setShowModal={setShowModal} />}
          />
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
