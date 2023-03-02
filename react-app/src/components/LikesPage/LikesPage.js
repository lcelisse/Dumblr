import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { readUsersLikedPostThunk } from "../../store/post";
import "./LikesPage.css";

const LikesPage = ({ user, isLoaded }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.session.user.id);

  useEffect(() => {
    dispatch(readUsersLikedPostThunk(state));
  }, [dispatch, state]);

  const likedPost = useSelector((state) => state.post.usersLikedPost);

  let likedPostArr;
  if (Object.values(likedPost).length) {
    const arr = Object.values(likedPost);
    likedPostArr = arr.map((each) => (
      <EachLikedPost key={each.id} each={each} />
    ));
  }

  return (
    isLoaded && (
      <div className="likes-paage-container">
        <div className="">{likedPostArr}</div>
      </div>
    )
  );
};

export default LikesPage;

const EachLikedPost = ({ each }) => {
  return (
    <div className="each-liked-post-container">
      <div className="container-for-each">
        <div className="each-username-container">{each.user.username}</div>
        <div className="each-title-container">{each.title}</div>
        <div className="each-image-container">
          <img className="image-for-each-post" src={each.url} />
        </div>
        <div className="each-title-container">{each.body}</div>
      </div>
    </div>
  );
};
