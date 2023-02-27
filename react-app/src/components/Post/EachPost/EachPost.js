import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import {
  deletePostThunk,
  updatePostThunk,
  likePostThunk,
  unlikePostThunk,
} from "../../../store/post";
import PostPageComments from "../../Comments/PostPageComments/PostPageComments";
import EditPost from "../EditPost/EditPost";
import "./EachPost.css";

const EachPost = ({ eachPost }) => {
  const currentUser = useSelector((state) => state.session.user);

  const dispatch = useDispatch();
  const history = useHistory();
  const { userId } = useParams();

  const [like, setLike] = useState(eachPost.post_likes[currentUser?.id]);

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
                <img src={eachPost.url} className="each-image"></img>
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
                </div>{" "}
                <div className="notes-total">
                  <p className="notes-label">
                    Notes{" "}
                    <span className="amount-of-comments-plus-likes">
                      {eachPost.likes_count + eachPost.comment_count}
                    </span>
                  </p>
                </div>
                <div className="like-post-container ">
                  <button
                    className={like ? "liked-like " : "unliked-like "}
                    onClick={likeButton}
                  >
                    <i class="fas fa-heart"></i>
                  </button>
                </div>
              </div>
              <div className="single-post-bottom">
                <div className="right-side-bottom">
                  <PostPageComments eachPost={eachPost} />
                </div>
              </div>
            </div>
          ) : (
            <div className="single-post-container">
              <div className="single-post-username">
                {eachPost.user.username}
              </div>
              <div className="single-post-title">{eachPost.title}</div>
              <div className="image-container">
                <img src={eachPost.url} className="each-image"></img>
              </div>
              <div className="single-post-body">{eachPost.body}</div>
              <div className="notes-total">
                <p className="notes-label">
                  Notes{" "}
                  <span className="amount-of-comments-plus-likes">
                    {eachPost.likes_count + eachPost.comment_count}
                  </span>
                </p>
              </div>
              <div className="like-post-container">
                <button
                  className={like ? "liked-like" : "unliked-like"}
                  onClick={likeButton}
                >
                  <i class="fas fa-heart"></i>
                </button>
              </div>
              <div className="single-post-bottom">
                <div className="right-side-bottom">
                  <PostPageComments eachPost={eachPost} />
                  {/* <CreateComment /> */}
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
            <img src={eachPost.url} className="each-image"></img>
          </div>
          <div className="single-post-body">{eachPost.body}</div>
          <div className="notes-total">
            <p className="notes-label">
              Notes{" "}
              <span className="amount-of-comments-plus-likes">
                {eachPost.likes_count + eachPost.comment_count}
              </span>
            </p>
          </div>
          <div className="single-post-bottom">
            <div className="right-side-bottom">
              <PostPageComments eachPost={eachPost} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EachPost;
