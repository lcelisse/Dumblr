import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Following.css";

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
  return (
    <div className="each-following-post-container">
      <div className="container-for-each-following">
        {/* <Link className="link-for-username" to={`/users/${each.id}`}> */}
        <div className="each-username-container">{each.username}</div>
        {/* </Link> */}
      </div>
    </div>
  );
};
