import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { readAllPostThunk } from "../../../store/post";
import CreatePost from "../CreatePost/CreatePost";
import EachPost from "../EachPost/EachPost";
import "./Feed.css";
import Pagination from "./Pagination/Pagination";

let PageSize = 10;

const Feed = () => {
  const dispatch = useDispatch();

  const allPosts = useSelector((state) => state.post.allPosts);
  const currentUser = useSelector((state) => state.session.user);
  let postArr = Object.values(allPosts);

  useEffect(() => {
    dispatch(readAllPostThunk());
  }, [dispatch]);

  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return postArr.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, postArr]);

  let post;

  if (Object.values(allPosts).length) {
    post = currentTableData.map((eachPost) => {
      return <EachPost key={eachPost.id} eachPost={eachPost} />;
    });
  }

  if (!Object.values(allPosts).length) return null;

  return (
    <>
      <div className="feed-container">
        <div className="feed-left-side">
          <div className="inside-feed-left-side">
            {currentUser !== null && (
              <div className="top-of-left-side-post">
                <CreatePost />
              </div>
            )}

            <div className="feed-post">
              <div className="feed-nav-bar"></div>
              <ul className="post">{post}</ul>
            </div>
          </div>
        </div>

        <div className="feed-right-side"></div>
      </div>{" "}
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={postArr.length}
        pageSize={PageSize}
        onPageChange={(page) => {
          setCurrentPage(page);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />
    </>
  );
};

export default Feed;
