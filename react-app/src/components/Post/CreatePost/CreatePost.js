import { useState, React, useEffect, useRef } from "react";
import { Modal } from "../../../context/Modal";
import CreatePostForm from "../CreatePostForm/CreatePostForm";
import "./CreatePost.css";
import OpenModalButton from "../../OpenModalButton/index";

const CreatePost = () => {
  const [showModal, setShowModal] = useState(false);
  const ulRef = useRef();
  const openMenu = () => {
    if (showModal) return;

    setShowModal(true);
  };

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
        <OpenModalButton
          buttonText="Create Post"
          onItemClick={closeMenu}
          modalComponent={<CreatePostForm setShowModal={setShowModal} />}
        />
      </div>
    </div>
  );
};

export default CreatePost;
