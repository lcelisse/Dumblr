import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { deletePostThunk, updatePostThunk } from "../../../store/post";
import PostPageComments from "../../Comments/PostPageComments/PostPageComments";
import EditPost from "../EditPost/EditPost";
import "./EachPost.css";

const EachPost = ({ eachPost }) => {
  const currentUser = useSelector((state) => state.session.user);

  const dispatch = useDispatch();
  const history = useHistory();

  if (!eachPost) {
    return null;
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
                  <div className="edit-post"></div>
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
