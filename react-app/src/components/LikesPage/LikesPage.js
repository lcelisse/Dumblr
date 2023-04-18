import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { readUsersLikedPostThunk } from "../../store/post";
import "./LikesPage.css";
import PostPageComments from "../Comments/PostPageComments/PostPageComments";

const LikesPage = ({ user, isLoaded }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.session.user?.id);

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
      <div className="likes-page-container">
        <div className="">{likedPostArr}</div>
      </div>
    )
  );
};

export default LikesPage;

const EachLikedPost = ({ each }) => {
  const currentUser = useSelector((state) => state.session.user);
  const [click, setClick] = useState(true);
  const [clickComment, setClickComment] = useState("right-side-bottom");
  const [clickLike, setClickLike] = useState(true);

  const onCLickNote = () => {
    if (currentUser !== null) {
      click === false ? setClick(true) : setClick(false);
      setClickLike(true);
    } else {
      click === true ? setClick(false) : setClick(true);
      setClickLike(true);
    }
  };

  // const onCLickLike = () => {
  //   if (currentUser !== null) {
  //     clickLike === false ? setClickLike(true) : setClickLike(false);
  //     setClick(true);
  //   } else {
  //     clickLike === true ? setClickLike(false) : setClickLike(true);
  //     setClick(true);
  //   }
  // };

  let postLike;

  const eachs = each.post_likes;
  if (eachs && Object.values(eachs).length) {
    const eachArr = Object.values(eachs);
    postLike = eachArr.map((user) => (
      <div className="display-username-of-likes">
        {/* <Link className="link-for-username" to={`/users/${user?.id}`}> */}
        {user?.username}
        {/* </Link> */}
      </div>
    ));
  }

  return (
    <div className="each-liked-post-container">
      <div className="container-for-each">
        <div className="each-username-container">
          {" "}
          {/* <Link className="link-for-username" to={`/users/${each.user.id}`}> */}
          {each.user.username}
          {/* </Link> */}
        </div>
        <div className="each-title-container">{each.title}</div>
        <div className="each-image-container">
          <img alt="" className="image-for-each-post" src={each.url} />
        </div>
        <div className="each-title-container">{each.body}</div>
        <nav className="nav-for-comment-stuff">
          <p className="notes-label">
            <p className="notes-label-text" onClick={onCLickNote}>
              Notes
            </p>{" "}
          </p>
        </nav>
        <div
          className={click ? "logged-out-comments" : "logged-comments-clicked"}
        >
          {" "}
          <div
            className={
              clickLike
                ? "show-likes-for-post-drop-down"
                : "show-likes-for-down-clicked"
            }
          >
            {postLike}
          </div>
          <div>
            <PostPageComments
              eachPost={each}
              click={click}
              setClickComment={setClickComment}
              clickComment={clickComment}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
