// ACTION TYPE

const CREATE_POST = "posts/CREATE_POST";
const READ_USER_POST = "posts/READ_USER_POST";
const READ_ALL_POST = "posts/READ_ALL_POST";
const READ_SINGLE_POST = "posts/READ_SINGLE_POST";
const UPDATE_POST = "posts/UPDATE_POST";
const DELETE_POST = "posts/DELETE_POST";

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

// THUNKS

export const createPostThunk = (type, post, img) => async (dispatch) => {
  if (type === "photo") {
    const s3img = await fetch(`/api/posts/upload`, {
      method: "POST",
      body: img,
    });
    if (s3img.ok) {
      await s3img.json().then(async (url) => {
        const res = await fetch(`/api/posts`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ type, post, url: url.url }),
        });
        if (res.ok) {
          const newPost = await res.json();
          dispatch(createPost(newPost));
          return newPost;
        }
      });
    }
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
    console.log(posts);
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

export const updatePostThunk = (post, postId) => async (dispatch) => {
  const res = await fetch(`/api/posts/${postId}`, {
    method: "PUT",
    body: post,
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

// STATE

const initialState = {
  allPosts: {},
  singlePost: {},
  userPosts: {},
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
    default:
      return state;
  }
}
