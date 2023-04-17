import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Following.css";
import { followUserThunk, unfollowUserThunk } from "../../store/session";

const Following = ({ isLoaded }) => {
  const state = useSelector((state) => state);
  const following = useSelector((state) => state.session?.user?.Following);

  let followingArr;

  if (following) {
    if (Object.values(following).length) {
      const arr = Object.values(following);
      followingArr = arr.map((each) => (
        <EachFollowing key={each.id} each={each} />
      ));
    } else {
      return "Not Following Anyone Yet ";
    }
  }

  return (
    <div className="Following-container">
      <div className="following-list">{followingArr}</div>
    </div>
  );
};

export default Following;

const EachFollowing = ({ each }) => {
  const currSession = useSelector((state) => state.session);
  const currUser = currSession.user;

  const dispatch = useDispatch();
  let follows = [];

  if (currUser?.Following) follows = Object.keys(currUser.Following);

  const followUser = () => {
    if (each.id === currUser?.id) {
      return { Error: "You cant follow yourself" };
    } else {
      dispatch(followUserThunk(each.id, currUser?.id));
    }
  };

  const unfollowUser = () => {
    dispatch(unfollowUserThunk(each.id));
  };

  let followBtn;
  if (follows.includes(`${each.id}`)) {
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
  return (
    <div className="each-following-post-container">
      <div className="container-for-each-following">
        {/* <Link className="link-for-username" to={`/users/${each.id}`}> */}
        <div className="each-username-container">
          {each.username}
          {followBtn}{" "}
        </div>

        {/* </Link> */}
      </div>
    </div>
  );
};
