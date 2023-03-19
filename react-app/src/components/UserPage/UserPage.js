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
    <div className="user-page-container-outer">
      {/* if this is the logged in users page */}
      <div className="inner-user-page-container">
        <div className="background-of-user-page">
          <div className="entire-body-part-for-user-page">
            <div className="top-part-user-page">
              <div className="user-page-info">
                <div className="header-image-container"></div>
                <div className="profile-picture-container"></div>
                <div className="display-name-container"></div>
                <div className="username-container"></div>
                <div className="title-cotnaier"></div>
                <div className="bio-container"></div>
                <div className="edit-profile-button-container"></div>
              </div>
            </div>
            <div className="middle-part-user-page">
              <div className="user-page-nav-bar">
                <div className="user-page-post"></div>
                <div className="users-liked-post"></div>
                <div className="who-the-user-is-following"></div>
              </div>
            </div>
            <div className="bottom-part-user-page">
              <div className="user-post-feed-container"></div>
            </div>
          </div>
        </div>
      </div>
      {/* if this is NOT the logged in users page */}
      <div></div>
      {/* if youre not signed in*/}
      <div></div>
    </div>
  );
};

export default UserPage;
