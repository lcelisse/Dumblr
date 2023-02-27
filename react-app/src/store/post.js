// ACTION TYPE

const CREATE_POST = "posts/CREATE_POST";
const READ_USER_POST = "posts/READ_USER_POST";
const READ_ALL_POST = "posts/READ_ALL_POST";
const READ_SINGLE_POST = "posts/READ_SINGLE_POST";
const UPDATE_POST = "posts/UPDATE_POST";
const DELETE_POST = "posts/DELETE_POST";
const LIKE_POST = "posts/LIKE_POST";
const UNLIKE_POST = "posts/UNLIKE_POSTS";
const READ_USERS_LIKED_POST = "posts/READ_USERS_LIKED_POST";

// CREATOR

const createPost = (post) => {
  return {
    type: CREATE_POST,
    post,
  };
};

const readUserPost = (post) => {
  return {
    type: READ_USER_POST,
    post,
  };
};

const readAllPost = (posts) => {
  return {
    type: READ_ALL_POST,
    posts,
  };
};

const readSinglePost = (post) => {
  return {
    type: READ_SINGLE_POST,
    post,
  };
};

const updatePost = (post) => {
  return {
    type: UPDATE_POST,
    post,
  };
};

const deletePost = (postId) => {
  return {
    type: DELETE_POST,
    postId,
  };
};

const likePost = (postId, current_user, post) => {
  return {
    type: LIKE_POST,
    payload: { postId, current_user, post },
  };
};

const unlikePost = (postId, current_user, userId) => {
  return {
    type: UNLIKE_POST,
    payload: { postId, current_user, userId },
  };
};

const readUsersLikedPost = (posts) => {
  return {
    type: READ_USERS_LIKED_POST,
    posts,
  };
};

// THUNKS

export const createPostThunk = (type, post, img) => async (dispatch) => {
  const formData = new FormData();
  formData.append("image", img);
  formData.append("post_type", type);
  formData.append("body", post);

  const res = await fetch(`/api/posts`, {
    method: "POST",
    body: formData,
  });
  if (res.ok) {
    const newPost = await res.json();
    dispatch(createPost(newPost));
    return newPost;
  }
};

export const readUserPostThunk = (userId) => async (dispatch) => {
  const res = await fetch(`/api/users/${userId}/posts`);

  if (res.ok) {
    const posts = await res.json();
    dispatch(readUserPost(posts));
    return posts;
  }
};

export const readAllPostThunk = () => async (dispatch) => {
  const res = await fetch(`/api/posts`);

  if (res.ok) {
    const posts = await res.json();

    dispatch(readAllPost(posts));

    return posts;
  } else {
    return res;
  }
};

export const readSinglePostThunk = (postId) => async (dispatch) => {
  const res = await fetch(`/api/posts/${postId}`);
  if (res.ok) {
    const post = await res.json();
    dispatch(readSinglePost(post));
    return post;
  }
};

export const updatePostThunk =
  (type, post, img, postId) => async (dispatch) => {
    const formData = new FormData();
    formData.append("image", img);
    formData.append("post_type", type);
    formData.append("body", post);

    const res = await fetch(`/api/posts/${postId}`, {
      method: "PUT",
      body: formData,
    });

    if (res.ok) {
      const post = await res.json();
      dispatch(updatePost(post));
      return post;
    }
  };

export const deletePostThunk = (postId) => async (dispatch) => {
  const res = await fetch(`/api/posts/${postId}`, {
    method: "DELETE",
  });

  if (res.ok) {
    const deletedPost = await res.json();
    dispatch(deletePost(postId));
    return deletedPost;
  }
};

// LIKES
export const likePostThunk = (postId, current_user) => async (dispatch) => {
  const res = await fetch(`/api/posts/${postId}/likes`, { method: "POST" });

  if (res.ok) {
    const post = await res.json();
    dispatch(likePost(postId, current_user, post));
  }
};

export const unlikePostThunk =
  (postId, current_user, userId) => async (dispatch) => {
    const res = await fetch(`/api/posts/${postId}/likes`, { method: "DELETE" });
    if (res.ok) {
      dispatch(unlikePost(postId, current_user, userId));
    }
  };

export const readUsersLikedPostThunk = (userId) => async (dispatch) => {
  const res = await fetch(`/api/users/${userId}/likes`);

  if (res.ok) {
    const likedPosts = await res.json();
    dispatch(readUsersLikedPost(likedPosts));
    return likedPosts;
  } else {
    return res;
  }
};

// STATE

const initialState = {
  allPosts: {},
  singlePost: {},
  userPosts: {},
  usersLikedPost: {},
};

// REDUCER
export default function postReducer(state = initialState, action) {
  let newState = { ...state };

  switch (action.type) {
    case CREATE_POST:
      newState.allPosts = { ...state.allPosts, [action.post.id]: action.post };
      return newState;
    case READ_USER_POST:
      newState = { ...state };
      newState.userPosts = { ...action.posts };
      return newState;
    case READ_ALL_POST:
      newState = { ...state };
      newState.allPosts = action.posts;
      return newState;
    case READ_SINGLE_POST:
      return { ...state, singlePost: action.post };
    case UPDATE_POST:
      return { ...state, singlePost: action.post };
    case DELETE_POST:
      newState.allPosts = { ...state.allPosts };
      delete newState.allPosts[action.postId];
      return newState;
    case READ_USERS_LIKED_POST:
      return { ...state, usersLikedPost: action.posts };
    case LIKE_POST: {
      const { postId, current_user, post } = action.payload;
      if (Object.values(newState.allPosts).length) {
        newState.allPosts = { ...state.allPosts };
        newState.allPosts[postId] = { ...state.allPosts[postId] };
        newState.allPosts[postId].post_likes = {
          ...state.allPosts[postId].post_likes,
        };

        newState.allPosts[postId].post_likes[current_user.id] = current_user;
        newState.allPosts[postId].likes_count++;
      }
      if (Object.values(newState.singlePost).length) {
        newState.singlePost = { ...state.singlePost };

        if (newState.singlePost.id === postId) {
          newState.singlePost.likes_count++;
          newState.singlePost.post_likes = {
            ...state.singlePost.post_likes,
          };
          newState.singlePost.post_likes[current_user.id] = current_user;
        }
      }
      if (Object.values(newState.userPosts).length) {
        newState.userPosts = { ...state.userPosts };
        newState.userPosts[postId] = { ...state.userPosts[postId] };
        if (newState.userPosts[postId]) {
          newState.userPosts[postId].likes_count++;

          newState.userPosts[postId].post_likes[current_user.id] = current_user;
        }
      }
      if (Object.values(newState.usersLikedPost).length) {
        newState.usersLikedPost[postId] = { ...state.usersLikedPost };

        if (newState.usersLikedPost[postId]) {
          newState.usersLikedPost[postId] = { ...state.usersLikedPost[postId] };
          newState.usersLikedPost[postId].likes_count++;

          newState.usersLikedPost[postId].post_likes[current_user.id] =
            current_user;
        } else {
          newState.usersLikedPost[postId] = post;
        }
      }
      return newState;
    }
    case UNLIKE_POST: {
      const { postId, current_user, userId } = action.payload;
      if (Object.values(newState.allPosts).length) {
        newState.allPosts = { ...state.allPosts };
      }
      if (newState.allPosts[postId]) {
        newState.allPosts[postId] = { ...state.allPosts[postId] };
        newState.allPosts[postId].post_likes = {
          ...state.allPosts[postId].post_likes,
        };

        delete newState.allPosts[postId].post_likes[current_user.id];
        newState.allPosts[postId].likes_count--;
      }
      if (Object.values(newState.singlePost).length) {
        newState.singlePost = { ...state.singlePost };

        if (newState.singlePost.id === postId) {
          newState.singlePost.likes_count--;
          newState.singlePost.post_likes = {
            ...state.singlePost.post_likes,
          };
          delete newState.singlePost.post_likes[current_user.id];
        }
      }
      if (Object.values(newState.userPosts).length) {
        newState.userPosts = { ...state.userPosts };

        if (newState.userPosts[postId]) {
          newState.userPosts[postId] = { ...state.userPosts[postId] };

          newState.userPosts[postId].likes_count--;

          delete newState.userPosts[postId].post_likes[current_user.id];
        }
      }
      if (Object.values(newState.usersLikedPost).length) {
        newState.usersLikedPost = { ...state.usersLikedPost };

        if (newState.usersLikedPost[postId]) {
          newState.usersLikedPost[postId] = { ...state.usersLikedPost[postId] };

          if (current_user.id === userId)
            delete newState.usersLikedPost[postId];
          else {
            newState.usersLikedPost[postId].likes_count--;
            delete newState.usersLikedPost[postId].post_likes[current_user.id];
          }
        }
      }
      return newState;
    }
    default:
      return state;
  }
}
