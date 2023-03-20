import { useDispatch, useSelector } from "react-redux";
import { setHeaderThunk } from "../../../store/session";
import { addHeader } from "../../../store/userPage";
import { useModal } from "../../../context/Modal";

const EditUserPageForm = () => {
  const dispatch = useDispatch();
  const currUser = useSelector((state) => state.session.user);
  const { closeModal } = useModal();

  const editHeaderImage = (e) => {
    const file = e.target.files[0];

    const data = new FormData();

    data.append("header_picture", file);

    dispatch(setHeaderThunk(data, currUser.id)).then((data) =>
      dispatch(addHeader(data))
    );
  };
  return (
    <div>
      <div>hi</div>
    </div>
  );
};

export default EditUserPageForm;
