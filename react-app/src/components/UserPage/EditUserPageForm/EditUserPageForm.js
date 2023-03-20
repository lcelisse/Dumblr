import { useDispatch, useSelector } from "react-redux";
import { editUserThunk, setHeaderThunk } from "../../../store/session";
import { addHeader, loadUser } from "../../../store/userPage";
import { useModal } from "../../../context/Modal";
import { useEffect, useRef, useState } from "react";

const EditUserPageForm = () => {
  const dispatch = useDispatch();
  const currUser = useSelector((state) => state.session.user);
  const { closeModal } = useModal();

  const [pfpImg, setPfpImg] = useState("");
  const [title, setTitle] = useState(currUser?.title || "");

  const [bio, setBio] = useState(currUser?.bio || "");
  const [errors, setErrors] = useState({});
  const imageRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);

    const data = new FormData();

    if (typeof pfpImg === "object") data.append("profile_picture", pfpImg);

    data.append("title", title);
    data.append("bio", bio);

    const res = await dispatch(editUserThunk(data, currUser.id));

    if (res.errors) {
      const newErrors = { ...errors, ...res };
      setErrors(newErrors);
      return;
    } else {
      dispatch(loadUser(res));
      closeModal();
      setErrors({});
    }
  };

  const editPfpImg = (e) => {
    const file = e.target.files[0];

    if (file?.size > 1000000) {
      const newError = { ...errors };

      newError["ImageSize"] = "File size xceeded. Maximun: 1MB";
      setErrors(newError);

      e.target.value = "";
      return;
    }

    if (errors.ImageSize) {
      const newErrors = { ...errors };
      delete newErrors.ImageSize;
      setErrors(newErrors);
    }

    if (errors.errors) {
      const newErrors = { ...errors };
      delete newErrors.errors;
      setErrors(newErrors);
    }

    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        imageRef.current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }

    setPfpImg(file);
  };

  const pfpPicker = () => {
    let pfps = [
      "https://pbs.twimg.com/media/CHd03RhUcAAGSh_.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSHWZO1QdEyQN1TLfc8YV33AXwUUCLITupAg&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDkS9M821pCsyMmmTxM6fnaDzcQrW__LehKg&usqp=CAU",
      "https://i.pinimg.com/736x/21/61/81/216181366c759c7aed39b462b72d30ee.jpg",
      "https://i.pinimg.com/originals/f3/59/15/f35915e57f359ed9861a08a8860fd71d.gif",
      "https://i.kym-cdn.com/photos/images/original/001/845/788/116",
    ];

    let randomNum;
    randomNum = Math.floor(Math.random() * 6);
    return pfps[randomNum];
  };

  return (
    <div className="modal-edit-page-container">
      <div className="close-modal-edit-user">
        <button onClick={() => closeModal()} className="the-button">
          <i class="far fa-edit"></i>
        </button>
      </div>
      <div className="edit-user-page-top-part">
        <h3 className="edit-modal-form-title">Edit Your Page</h3>
      </div>
      {errors.errors && (
        <ul className="errors">
          <li style={{ color: "red" }} className="print-errors">
            {errors.errors}
          </li>
        </ul>
      )}
      <div className="modal-form-container">
        <form className="edit-user-form" method="POST" onSubmit={handleSubmit}>
          <div className="form-page-body">
            <div className="pfp-upload">
              <img
                ref={imageRef}
                className="pfp-image-upload"
                alt=""
                src={
                  currUser?.profile_image_url
                    ? currUser?.profile_image_url
                    : pfpPicker()
                }
              />
              <p>Upload Your Profile Picture</p>
              <input
                id="profile-pic-file"
                className="upload-file-input"
                name="profile-pic-file"
                type="file"
                accept="image/*"
                onChange={editPfpImg}
              />
            </div>
          </div>
          {errors.ImageSize && (
            <p style={{ color: "red" }}>{errors.ImageSize}</p>
          )}
          <div className="edit-title-user-page">
            <label className="title-input-label" htmlFor="title">
              Title
            </label>
            <textarea
              className="title-area-input"
              name="title"
              placeholder="title"
              value={title}
              maxLength="475"
              onChange={(e) => setTitle(e.target.value)}
            ></textarea>
          </div>
          <div className="edit-bio-user-page">
            <label className="text-input-label" htmlFor="biography">
              Biography
            </label>
            <textarea
              className="text-area-input"
              name="biography"
              placeholder="bio"
              value={bio}
              maxLength="475"
              onChange={(e) => setBio(e.target.value)}
            ></textarea>
          </div>
          <div className="buttons-to-save">
            <button
              id="modal-btn"
              type="button"
              className="cancel-button-edit"
              onClick={() => closeModal()}
            >
              Cancel
            </button>
            <button
              id="modal-btn"
              type="button"
              className="cancel-button-save"
              onClick={handleSubmit}
            >
              Save Edits
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUserPageForm;
