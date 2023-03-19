const LOAD_USER = "userPage/SET_USER";
const ADD_HEADER = "userPage/ADD_HEADER";

export const loadUser = (user) => ({ type: LOAD_USER, user });
export const addHeader = (image) => ({ type: ADD_HEADER, image });

export const loadUserThunk = (userId) => async (dispatch) => {
  const res = await fetch(`/api/users/${userId}`);

  if (res.ok) {
    const userId = await res.json();
    dispatch(loadUser(userId));
    return userId;
  }
};

const initialState = {
  userProfile: {},
};

export default function userPageReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case LOAD_USER:
      newState = { ...state };
      newState = { ...state.userProfile };
      newState.userProfile = action.user;
      return newState;
    case ADD_HEADER:
      newState = { ...state, userProfile: { ...state.userProfile } };
      newState.userProfile.header_image_url = action.image;
      return newState;
    default:
      return state;
  }
}
