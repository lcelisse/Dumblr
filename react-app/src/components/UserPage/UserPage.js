import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadUserThunk } from "../../store/userPage";
import { readUserPostThunk, readUsersLikedPostThunk } from "../../store/post";
import { setHeaderThunk } from "../../store/session";
import { addHeader } from "../../store/userPage";
import "./UserPage.css";
import OpenModalButton from "../OpenModalButton";
import EditUserPageForm from "./EditUserPageForm/EditUserPageForm";
import EachPost from "../Post/EachPost/EachPost";

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

  const headerPicker = () => {
    let headers = [
      "https://compote.slate.com/images/80aab072-5197-4d36-8744-fdf325f6fa54.jpg",
      "https://i.pinimg.com/originals/ef/24/df/ef24df8d9b179d8b2e540b7ab8f493b2.png",
      "https://i.pinimg.com/736x/20/3d/47/203d47e4a1273b6a9148b4867a2ab9b0.jpg",
      "https://media.tenor.com/X15e67QrANUAAAAM/the-office.gif",
      "https://media.tenor.com/ryHkIuH-DXIAAAAC/dwight-the-office.gif",
      "https://media.tenor.com/UbJFeMf3MA8AAAAC/mexican-stalemate-the-office.gif",
    ];

    let randomNum;
    randomNum = Math.floor(Math.random() * 6);
    return headers[randomNum];
  };

  let postArr = Object.values(userPosts);

  let post;

  if (Object.values(userPosts).length) {
    post = postArr.map((eachPost) => {
      return <EachPost key={eachPost.id} eachPost={eachPost} />;
    });
  }

  if (!Object.values(userPosts).length) return null;

  return (
    <div className="user-page-container-outer">
      {/* if this is the logged in users page */}
      <div className="inner-user-page-container">
        <div className="background-of-user-page">
          <div className="entire-body-part-for-user-page">
            <div className="top-part-user-page">
              <div className="header-image-container">
                {userProf?.header_image_url ? (
                  <div className="header-image">
                    <img
                      className="user-page-header"
                      src={userProf?.header_image_url}
                      alt="header"
                    ></img>
                  </div>
                ) : (
                  <div className="header-image">
                    <img
                      className="user-page-header"
                      src={headerPicker()}
                      alt="header"
                    ></img>
                  </div>
                )}
              </div>
              <div className="user-page-info">
                <div className="profile-picture-container">
                  {userProf?.profile_image_url ? (
                    <div className="profile-image">
                      <img
                        className="user-page-profile-image"
                        src={userProf?.profile_image_url}
                        alt="profile"
                      ></img>
                    </div>
                  ) : (
                    <div className="profile-image">
                      <img
                        className="user-page-profile-image"
                        src={pfpPicker()}
                        alt="profile"
                      ></img>
                    </div>
                  )}
                </div>
                <div className="title-container">
                  <h1 className="title-label">{userProf?.title}</h1>
                </div>
                <div className="username-container">
                  <p className="username-label">{`@${userProf?.username}`}</p>
                </div>
                {/* <div className="display-name-container"></div> */}
                <div className="bio-container">
                  <div className="bio-label">{userProf?.bio}</div>
                </div>
                <div className="edit-profile-button-container">
                  <span className="the-button-container">
                    <span className="the-link-to-the-button">
                      <OpenModalButton
                        className="the-link-to-the-button"
                        modalComponent={<EditUserPageForm />}
                        buttonText="Blog Settings"
                      />
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="middle-part-user-page">
              <div className="user-page-nav-bar">
                <div className="user-page-post">Posts</div>
                <div className="users-liked-post">Likes</div>
                <div className="who-the-user-is-following">Following</div>
              </div>
            </div>
            <div className="bottom-part-user-page">
              <div className="user-post-feed-container">
                <div className="inside-the-container">{post}</div>
              </div>
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
