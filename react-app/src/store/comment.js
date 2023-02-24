// ACTION TYPE

const READ_POST_COMMENTS = "comments/READ_POST_COMMENTS";
const CREATE_COMMENT = "comments/CREATE_COMMENT";
const DELETE_COMMENT = "comments/DELETE_COMMENTS";

// CREATOR

const readPostComments = (comments) => {
  return {
    type: READ_POST_COMMENTS,
    comments,
  };
};

const createComment = (comment) => {
  return {
    type: CREATE_COMMENT,

    comment,
  };
};

const deleteComment = (commentId) => {
  return {
    type: DELETE_COMMENT,
    commentId,
  };
};

// THUNKS

export const readPostCommentsThunk = (postId) => async (dispatch) => {
  const res = await fetch(`/api/posts/${postId}/comments`);

  if (res.ok) {
    const comments = await res.json();
    dispatch(readPostComments(comments));

    return comments;
  }
};

export const createCommentThunk = (postId, comment) => async (dispatch) => {
  const res = await fetch(`/api/posts/${postId}/comments`, {
    method: "POST",
    headers: { "Conetent-Type": "application/json" },
    body: JSON.stringify(comment),
  });

  if (res.ok) {
    const createdComment = await res.json();
    dispatch(createComment(createdComment));
    return createdComment;
  }
};

export const deleteCommentThunk = (commentId) => async (dispatch) => {
  const res = await fetch(`/api/comments/${commentId}`, {
    method: "DELETE",
  });

  if (res.ok) {
    const deletedComment = await res.json();
    dispatch(deleteComment(commentId));
    return deletedComment;
  }
};

// STATE

const initialState = {
  post: {},
  user: {},
};

// REDUCER
export default function commentsReducer(state = initialState, action) {
  let newState = { ...state };
  switch (action.type) {
    case READ_POST_COMMENTS:
      newState.post = {};
      if (Array.isArray(action.comments)) {
        action.comments.forEach((comment) => {
          newState.post[comment.id] = comment;
        });
      }
      return newState;
    case CREATE_COMMENT:
      newState.post = { ...state.post, [action.comment.id]: action.comment };
      return newState;
    case DELETE_COMMENT:
      newState.post = { ...state.post };
      delete newState.post[action.commentId];
      if (
        Object.values(newState.user).length &&
        newState.user[action.commentId]
      ) {
        newState.user = { ...state.user };
        delete newState.user[action.commentId];
      }
      return newState;
    default:
      return state;
  }
}
