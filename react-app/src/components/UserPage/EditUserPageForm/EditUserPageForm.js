import { useDispatch, useSelector } from "react-redux";
import { setHeaderThunk } from "../../../store/session";
import { addHeader } from "../../../store/userPage";
import { useModal } from "../../../context/Modal";
import { useState } from "react";

const EditUserPageForm = () => {
  const dispatch = useDispatch();
  const currUser = useSelector((state) => state.session.user);
  const { closeModal } = useModal();

  const [pfpImg, setPfpImg] = useState("");

  return (
    <div>
      <div>hi</div>
    </div>
  );
};

export default EditUserPageForm;
