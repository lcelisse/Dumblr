import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { deletePostThunk, updatePostThunk } from "../../../store/post";
import PostPageComments from "../../Comments/PostPageComments/PostPageComments";
import "./EachPost.css";

const EachPost = ({ eachPost }) => {
  const currentUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <>
      {/* {currentUser.id === eachPost.user.id ? (
        <div className="single-post-container">
          <div className="single-post-username">{eachPost.user.username}</div>
          <div className="single-post-title">{eachPost.title}</div>
          <div className="single-post-body">{eachPost.body}</div>
          <div className="delete-and-edit-post">
            <div className="right-side-of-edit-delete">
              <div className="delete-post">
                <button
                  onClick={() =>
                    dispatch(deletePostThunk(eachPost.id)).then(() =>
                      history.push("/posts")
                    )
                  }
                >
                  <i class="fa-solid fa-trash-can"></i>
                </button>
              </div>
              <div className="edit-post"></div>
            </div>
          </div>
          <div className="single-post-bottom">
            <div className="right-side-bottom">
              <div className="post-comment">
                <button
                  onClick={() => {
                    handleClick();
                  }}
                >
                  <i class="fa-sharp fa-regular fa-comment"></i>
                </button>
                <div className={click}>
                  <PostPageComments />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="single-post-container">
          <div className="single-post-username">{eachPost.user.username}</div>
          <div className="single-post-title">{eachPost.title}</div>
          <div className="single-post-body">{eachPost.body}</div>
          <div className="single-post-bottom">
            <div className="right-side-bottom">
              <div className="post-comment">
                <button
                  onClick={() => {
                    handleClick();
                  }}
                >
                  <i class="fa-sharp fa-regular fa-comment"></i>
                </button>
                <div className={click}>
                  <PostPageComments eachPost={eachPost} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )} */}
      <div className="single-post-container">
        <div className="single-post-username">{eachPost.user.username}</div>
        <div className="single-post-title">{eachPost.title}</div>
        <div className="single-post-body">{eachPost.body}</div>
        <div className="single-post-bottom">
          <div className="right-side-bottom">
            <PostPageComments eachPost={eachPost} />
          </div>
        </div>
      </div>
    </>
  );
};

export default EachPost;
