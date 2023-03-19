import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadUserThunk } from "../../store/userPage";
import { readUserPostThunk, readUsersLikedPostThunk } from "../../store/post";

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

  return (
    <div className="user-page-container">
      <div className="">hi</div>
    </div>
  );
};

export default UserPage;
