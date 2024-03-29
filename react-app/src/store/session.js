// constants
const SET_USER = "session/SET_USER";
const REMOVE_USER = "session/REMOVE_USER";
const FOLLOW_USER = "session/FOLLOW_USER";
const UNFOLLOW_USER = "session/UNFOLLOW_USER";
const EDIT_USER = "session/EDIT_USER";
const SET_HEADER = "session/SET_HEADER";

const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

const removeUser = () => ({
  type: REMOVE_USER,
});

const followUser = (user) => {
  return {
    type: FOLLOW_USER,
    user,
  };
};

const unfollowUser = (user) => {
  return {
    type: UNFOLLOW_USER,
    user,
  };
};

const editUser = (user) => ({
  type: EDIT_USER,
  user,
});

const setHeader = (image) => ({
  type: SET_HEADER,
  image,
});

const initialState = { user: null };

export const authenticate = () => async (dispatch) => {
  const response = await fetch("/api/auth/", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    const data = await response.json();
    if (data.errors) {
      return;
    }

    dispatch(setUser(data));
  }
};

export const login = (email, password) => async (dispatch) => {
  const response = await fetch("/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(setUser(data));
    return null;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ["An error occurred. Please try again."];
  }
};

export const logout = () => async (dispatch) => {
  const response = await fetch("/api/auth/logout", {
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    dispatch(removeUser());
  }
};

export const signUp = (username, email, password) => async (dispatch) => {
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(setUser(data));
    return null;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ["An error occurred. Please try again."];
  }
};

export const followUserThunk =
  (followingId, followerId) => async (dispatch) => {
    const res = await fetch(`/api/users/${followingId}/following`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        followingId,
        followerId,
      }),
    });

    if (res.ok) {
      const followed = await res.json();
      dispatch(followUser(followed));
      return followed;
    }
  };

export const unfollowUserThunk = (followingId) => async (dispatch) => {
  const res = await fetch(`/api/users/${followingId}/following`, {
    method: "DELETE",
  });
  if (res.ok) {
    const unfollowed = await res.json();
    dispatch(unfollowUser(followingId));
    return unfollowed;
  }
};

export const editUserThunk = (user, userId) => async (dispatch) => {
  const res = await fetch(`/api/users/${userId}`, {
    method: "PUT",
    body: user,
  });

  if (res.ok) {
    const editedUser = await res.json();
    dispatch(editUser(editedUser));
    return editedUser;
  } else {
    const data = await res.json();
    if (data.errors) {
      return data;
    }
  }
};

export const setHeaderThunk = (data, userId) => async (dispatch) => {
  const res = await fetch(`/api/users/${userId}/header-image`, {
    method: "POST",
    body: data,
  });

  if (res.ok) {
    const user = await res.json();
    dispatch(setHeader(user.header_image_url));
    return user.header_image_url;
  } else {
    return res;
  }
};

const normalizeArray = (arr) => {
  let obj = {};
  if (Array.isArray(arr)) arr.forEach((each) => (obj[each.id] = each));
  return obj;
};

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case SET_USER:
      newState = { user: action.payload };
      newState.user.Following = normalizeArray(action.payload.Following);
      return newState;
    case REMOVE_USER:
      return { user: null };
    case FOLLOW_USER:
      newState = { ...state };
      newState.user.Following[action.user.id] = action.user;
      return newState;
    case UNFOLLOW_USER:
      newState = { ...state };
      delete newState.user.Following[action.user];
      return newState;

    case EDIT_USER: {
      newState = { ...state };
      newState.user = { ...state.user, ...action.user };
      return newState;
    }
    case SET_HEADER:
      newState = { ...state, user: { ...state.user } };
      newState.header_image_url = action.image;
      return newState;
    default:
      return state;
  }
}
