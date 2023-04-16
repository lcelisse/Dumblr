import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { readUsersLikedPostThunk } from "../../store/post";
import "./LikesPage.css";
import { useParams } from "react-router-dom";

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
  const [like, setLike] = useState(each.post_likes[currentUser?.id]);

  const [click, setClick] = useState(true);

  const [clickLike, setClickLike] = useState(true);

  const [clickComment, setClickComment] = useState("right-side-bottom");

  const [noUserComments, setNoUserComments] = useState("logged-out-comments");
  const { userId } = useParams();

  const noUserClick = () => {
    noUserClick === "logged-out-comments"
      ? setNoUserComments("logged-out-comments-clicked")
      : setNoUserComments("logged-out-comments");
  };

  if (!each) {
    return null;
  }

  const likeButton = () => {
    const post_likes = each.post_likes;

    if (post_likes[currentUser.id]) {
      dispatch(unlikePostThunk(each.id, currentUser, userId));
      setLike(false);
    } else {
      dispatch(likePostThunk(each.id, currentUser));

      setLike(true);
    }
  };

  const clickComments = () => {
    clickComment === "right-side-bottom"
      ? setClickComment("right-side-bottom-clicked")
      : setClickComment("right-side-bottom");
  };

  const onCLickNote = () => {
    if (currentUser !== null) {
      click === false ? setClick(true) : setClick(false);
      setClickLike(true);
    } else {
      click === true ? setClick(false) : setClick(true);
      setClickLike(true);
    }
  };

  const onCLickLike = () => {
    if (currentUser !== null) {
      clickLike === false ? setClickLike(true) : setClickLike(false);
      setClick(true);
    } else {
      clickLike === true ? setClickLike(false) : setClickLike(true);
      setClick(true);
    }
  };

  //get likes of post
  let postLike;

  const eachP = each.post_likes;
  if (eachP && Object.values(each).length) {
    const eachArr = Object.values(eachP);
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
          <img className="image-for-each-post" alt="" src={each.url} />
        </div>
        <div className="each-title-container">{each.body}</div>
        <nav className="nav-for-comments-likes">
          <p className="notes-label">
            <p className="notes-label-text" onClick={onCLickNote}>
              Notes
            </p>{" "}
            <p className="show-likes-for-post" onClick={onCLickLike}>
              Likes
            </p>
            <button className="comment-button">
              <i class="fa-regular fa-comment" onClick={onCLickNote}></i>
            </button>
            <button
              className={like ? "liked-like " : "unliked-like "}
              onClick={likeButton}
            >
              <i class="fas fa-heart"></i>
            </button>
          </p>
        </nav>

        <div
          className={
            click ? "single-post-bottom" : "single-post-bottom-clicked"
          }
        >
          <div
            className={
              clickLike
                ? "show-likes-for-post-drop-down"
                : "show-likes-for-post-drop-down-clicked"
            }
          >
            {postLike}
          </div>
          <div className={clickComments}>
            <PostPageComments
              eachPost={eachPost}
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
