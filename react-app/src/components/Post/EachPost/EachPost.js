import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  deletePostThunk,
  likePostThunk,
  unlikePostThunk,
} from "../../../store/post";
import { followUserThunk, unfollowUserThunk } from "../../../store/session";
import PostPageComments from "../../Comments/PostPageComments/PostPageComments";
import EditPost from "../EditPost/EditPost";
import "./EachPost.css";

const EachPost = ({ eachPost }) => {
  const currentUser = useSelector((state) => state.session.user);

  const currSession = useSelector((state) => state.session);
  const currUser = currSession.user;
  const dispatch = useDispatch();

  const { userId } = useParams();

  const [like, setLike] = useState(eachPost.post_likes[currentUser?.id]);

  const [click, setClick] = useState(true);

  const [clickLike, setClickLike] = useState(true);

  const [clickComment, setClickComment] = useState("right-side-bottom");

  const [noUserComments, setNoUserComments] = useState("logged-out-comments");

  const noUserClick = () => {
    noUserClick === "logged-out-comments"
      ? setNoUserComments("logged-out-comments-clicked")
      : setNoUserComments("logged-out-comments");
  };

  if (!eachPost) {
    return null;
  }
  const likeButton = () => {
    const post_likes = eachPost.post_likes;

    if (post_likes[currentUser.id]) {
      dispatch(unlikePostThunk(eachPost.id, currentUser, userId));
      setLike(false);
    } else {
      dispatch(likePostThunk(eachPost.id, currentUser));
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

  // follow
  let follows = [];

  if (currUser?.Following) follows = Object.keys(currUser.Following);

  const followUser = () => {
    if (eachPost.user.id === currUser.id) {
      return { Error: "You cant follow yourself" };
    } else {
      dispatch(followUserThunk(eachPost.user.id, currUser.id));
    }
  };

  const unfollowUser = () => {
    dispatch(unfollowUserThunk(eachPost.user.id));
  };

  let followBtn;
  if (follows.includes(`${eachPost.user.id}`)) {
    followBtn = (
      <p className="follow-button" onClick={unfollowUser}>
        Unfollow User
      </p>
    );
  } else {
    followBtn = (
      <p className="follow-button" onClick={followUser}>
        Follow User
      </p>
    );
  }

  //get likes of post
  let postLike;

  const each = eachPost.post_likes;
  if (each && Object.values(each).length) {
    const eachArr = Object.values(each);
    postLike = eachArr.map((user) => (
      <div className="display-username-of-likes">{user?.username}</div>
    ));
  }

  return (
    <>
      {currentUser ? (
        <>
          {currentUser.id === eachPost.user.id ? ( // current user is the author of this post
            <div className="single-post-container">
              <div className="single-post-username">
                {eachPost.user.username}
              </div>

              <div className="single-post-title">{eachPost.title}</div>
              <div className="image-container">
                <img src={eachPost.url} className="each-image" alt=""></img>
              </div>

              <div className="single-post-body">{eachPost.body}</div>
              <div className="delete-and-edit-post">
                <div className="right-side-of-edit-delete">
                  <div className="delete-post">
                    <button
                      className="delete-button"
                      onClick={() => dispatch(deletePostThunk(eachPost.id))}
                    >
                      <i class="fa-solid fa-trash-can"></i>
                    </button>
                    <EditPost eachPost={eachPost} />
                  </div>
                </div>
              </div>
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
                {" "}
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
          ) : (
            //logged in not author of current post
            <div className="single-post-container">
              <div className="top-of-single-post-container">
                <div className="single-post-username">
                  {eachPost.user.username}
                  <div className="to-follow-or-unfollow">{followBtn}</div>
                </div>
              </div>

              <div className="single-post-title">{eachPost.title}</div>
              <div className="image-container">
                <img src={eachPost.url} className="each-image" alt=""></img>
              </div>
              <div className="single-post-body">{eachPost.body}</div>
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
          )}
        </>
      ) : (
        // Not signed in
        <div className="single-post-container">
          <div className="single-post-username">{eachPost.user.username}</div>
          <div className="single-post-title">{eachPost.title}</div>
          <div className="image-container">
            <img src={eachPost.url} className="each-image" alt=""></img>
          </div>
          <div className="single-post-body">{eachPost.body}</div>
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
            </p>
          </nav>
          <div
            className={
              click ? "logged-out-comments" : "logged-out-comments-clicked"
            }
          >
            {" "}
            <div
              className={
                clickLike
                  ? "show-likes-for-post-drop-down"
                  : "show-likes-for-post-drop-down-clicked"
              }
            >
              {postLike}
            </div>
            <div>
              <PostPageComments
                eachPost={eachPost}
                click={click}
                // setClickComment={setClickComment}
                // clickComment={clickComment}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EachPost;
