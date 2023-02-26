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

const createComment = (userId, comment) => {
  return {
    type: CREATE_COMMENT,
    userId,
    comment,
  };
};

const deleteComment = ({ commentId, postId }) => {
  return {
    type: DELETE_COMMENT,
    commentId,
    postId,
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

export const createCommentThunk =
  (userId, postId, comment) => async (dispatch) => {
    const res = await fetch(`/api/posts/${postId}/comments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ comment, userId }),
      // body: { comment: JSON.stringify(comment) },
    });

    if (res.ok) {
      const createdComment = await res.json();
      dispatch(createComment(userId, createdComment));
      return createdComment;
    }
  };

export const deleteCommentThunk =
  ({ commentId, postId }) =>
  async (dispatch) => {
    const res = await fetch(`/api/comments/${commentId}`, {
      method: "DELETE",
    });

    if (res.ok) {
      const deletedComment = await res.json();
      dispatch(deleteComment({ commentId, postId }));
      return deletedComment;
    }
  };

// STATE

const initialState = {};

/**
 * comment = {
 *    56: [ { comment: 'very nice', userId: 4, id: 10 } ],
 *    25: [ { comment: 'dope', userId: 2, id: 12 }, { comment: 'also i think dope', userId: 5, id: 20 } ]
 * }
 */

// REDUCER
export default function commentsReducer(state = initialState, action) {
  let newState = { ...state };
  switch (action.type) {
    case READ_POST_COMMENTS:
      let postId;
      if (action.comments.length > 0) {
        postId = action.comments[0].post_id;
      }
      newState[postId] = action.comments;
      return newState;
    case CREATE_COMMENT:
      newState[action.comment.post_id] = [
        ...state[action.comment.post_id],
        action.comment,
      ];
      return newState;
    case DELETE_COMMENT:
      const commentIdToDelete = action.commentId;
      newState[action.postId] = newState[action.postId].filter(
        (comment) => comment.id !== commentIdToDelete
      );
      return newState;
    default:
      return state;
  }
}
