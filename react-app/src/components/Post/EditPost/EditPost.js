import { useEffect, useRef, useState } from "react";

import OpenModalButton from "../../OpenModalButton";
import EditPostForm from "../EditPost/EditPostForm";

const EditPost = ({ eachPost }) => {
  const [showModal, setShowModal] = useState(false);
  const ulRef = useRef();

  // const openMenu = () => {
  //   if (showModal) return;

  //   setShowModal(true);
  // };

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
    <div className="edit-post-container">
      <div className="edit-post-button-contaier">
        <h1
          className="button-for-edit-post"
          onClick={() => setShowModal(true)}
        ></h1>
      </div>
      <div className="modal-to-create-post">
        <OpenModalButton
          buttonText="✎"
          onItemClick={closeMenu}
          modalComponent={
            <EditPostForm setShowModal={setShowModal} eachPost={eachPost} />
          }
        />
      </div>
    </div>
  );
};

export default EditPost;
