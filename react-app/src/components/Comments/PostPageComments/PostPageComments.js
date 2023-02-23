import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { readPostCommentsThunk } from "../../../store/comment";
import EachPost from "../../Post/EachPost/EachPost";

const PostPageComments = ({ eachPost }) => {
  const dispatch = useDispatch();
  //   const postComments = useSelector((state) => state);
  //   console.log("hi", postComments);

  //   useEffect(() => {
  //     dispatch(readPostCommentsThunk(eachPost.id));
  //   }, [dispatch, eachPost.id]);

  return (
    <div className="all-comments-section-container">
      <div className="add-a-comment"></div>
    </div>
  );
};

export default PostPageComments;
