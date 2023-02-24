import { useState } from "react";
import { Modal } from "../../../context/Modal";

const EditPost = ({ post }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="edit-post-container">
      <div className="edit-post-button-contaier">
        <h1 className="button-for-edit-post" onClick={() => setShowModal(true)}>
          <i class="fa-regular fa-pen-to-square"></i>
        </h1>
      </div>
      <div className="modal-to-create-post">
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <EditPostForm setShowModal={setShowModal} />
          </Modal>
        )}
      </div>
    </div>
  );
};

export default EditPost;
