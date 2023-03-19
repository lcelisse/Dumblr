import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadUserThunk } from "../../store/userPage";
import { readUserPostThunk, readUsersLikedPostThunk } from "../../store/post";
import { setHeaderThunk } from "../../store/session";
import { addHeader } from "../../store/userPage";

const UserPage = () => {
  const { userId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUserThunk(userId));
    dispatch(readUserPostThunk(userId));
    dispatch(readUsersLikedPostThunk(userId));
  }, [dispatch, userId]);

  const currUser = useSelector((state) => state.session.user);
  const userProf = useSelector((state) => state.userPage.userProfile);
  const userPosts = useSelector((state) => state.post.userPosts);

  const editHeaderImage = (e) => {
    const file = e.target.files[0];

    const data = new FormData();

    data.append("header_picture", file);

    dispatch(setHeaderThunk(data, currUser.id)).then((data) =>
      dispatch(addHeader(data))
    );
  };

  const pfp = "https://pbs.twimg.com/media/CHd03RhUcAAGSh_.jpg";

  return (
    <div className="user-page-container">
      <div className="">hi</div>
    </div>
  );
};

export default UserPage;
