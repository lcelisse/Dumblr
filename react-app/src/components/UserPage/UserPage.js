// import { useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { loadUserThunk } from "../../store/userPage";
// import {
//   likePostThunk,
//   readUserPostThunk,
//   readUsersLikedPostThunk,
//   unlikePostThunk,
// } from "../../store/post";
// import { setHeaderThunk } from "../../store/session";
// import { addHeader } from "../../store/userPage";
// import "./UserPage.css";
// import OpenModalButton from "../OpenModalButton/index";
// import EditUserPageForm from "./EditUserPageForm/EditUserPageForm";
// import EachPost from "../Post/EachPost/EachPost";

// const UserPage = () => {
//   const { userId } = useParams();
//   const dispatch = useDispatch();

//   const [likedPost, setLikedPost] = useState("users-liked-post");
//   const [myPost, setMyPost] = useState("user-page-post-clicked");

//   const [visiblePost, setVisiblePost] = useState("users-liked-post-hidden");
//   const [visibleMyPost, setVisibleMyPost] = useState(
//     "user-post-feed-container"
//   );

//   const likedPostClickHandler = () => {
//     if (likedPost === "users-liked-post") {
//       setLikedPost("users-liked-post-clicked");
//       setMyPost("user-page-post");
//       setVisibleMyPost("user-post-feed-container-hidden");

//       setVisiblePost("users-liked-post");
//     }
//   };

//   const myPostClickHandler = () => {
//     if (myPost === "user-page-post") {
//       setMyPost("user-page-post-clicked");
//       setLikedPost("users-liked-post");

//       setVisibleMyPost("user-post-feed-container");
//       setVisiblePost("users-liked-post-hidden");
//     }
//     if (myPost === "user-page-post-clicked") {
//       setVisiblePost("users-liked-post-hidden");
//     }
//   };
//   useEffect(() => {
//     dispatch(loadUserThunk(userId));
//     dispatch(readUserPostThunk(userId));
//     dispatch(readUsersLikedPostThunk(userId));
//   }, [dispatch, userId]);

//   const currUser = useSelector((state) => state.session.user);
//   const userProf = useSelector((state) => state.userPage.userProfile);

//   const userPosts = useSelector((state) => state.post.userPosts);
//   const userLikedPost = useSelector((state) => state.post?.usersLikedPost);

//   const pfpPicker = () => {
//     let pfps = [
//       "https://pbs.twimg.com/media/CHd03RhUcAAGSh_.jpg",
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSHWZO1QdEyQN1TLfc8YV33AXwUUCLITupAg&usqp=CAU",
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDkS9M821pCsyMmmTxM6fnaDzcQrW__LehKg&usqp=CAU",
//       "https://i.pinimg.com/736x/21/61/81/216181366c759c7aed39b462b72d30ee.jpg",
//       "https://i.pinimg.com/originals/f3/59/15/f35915e57f359ed9861a08a8860fd71d.gif",
//       "https://i.kym-cdn.com/photos/images/original/001/845/788/116",
//     ];

//     let randomNum;
//     randomNum = Math.floor(Math.random() * 6);
//     return pfps[randomNum];
//   };

//   const headerPicker = () => {
//     let headers = [
//       "https://compote.slate.com/images/80aab072-5197-4d36-8744-fdf325f6fa54.jpg",
//       "https://i.pinimg.com/originals/ef/24/df/ef24df8d9b179d8b2e540b7ab8f493b2.png",
//       "https://i.pinimg.com/736x/20/3d/47/203d47e4a1273b6a9148b4867a2ab9b0.jpg",
//       "https://media.tenor.com/X15e67QrANUAAAAM/the-office.gif",
//       "https://media.tenor.com/ryHkIuH-DXIAAAAC/dwight-the-office.gif",
//       "https://media.tenor.com/UbJFeMf3MA8AAAAC/mexican-stalemate-the-office.gif",
//     ];

//     let randomNum;
//     randomNum = Math.floor(Math.random() * 6);
//     return headers[randomNum];
//   };

//   let postArr = Object.values(userPosts);

//   let post;

//   if (Object.values(userPosts).length) {
//     post = postArr.map((eachPost) => {
//       return <EachPost key={eachPost.id} eachPost={eachPost} />;
//     });
//   }

//   if (!Object.values(userPosts).length) return null;

//   const editHeaderImage = (e) => {
//     const file = e.target.files[0];

//     const data = new FormData();

//     data.append("header_picture", file);

//     dispatch(setHeaderThunk(data, currUser.id)).then((data) =>
//       dispatch(addHeader(data))
//     );
//   };

//   return (
//     <>
//       {currUser?.id === userProf.id ? (
//         <div className="user-page-container-outer">
//           {/* if this is the logged in users page */}

//           <div className="inner-user-page-container">
//             <div className="background-of-user-page">
//               <div className="entire-body-part-for-user-page">
//                 <div className="top-part-user-page">
//                   <div className="header-image-container">
//                     {userProf?.header_image_url ? (
//                       <div className="header-image">
//                         <img
//                           className="user-page-header"
//                           src={userProf?.header_image_url}
//                           alt="headerrrr"
//                         ></img>
//                       </div>
//                     ) : (
//                       <div className="header-image">
//                         <img
//                           className="user-page-header"
//                           src={headerPicker()}
//                           alt="header"
//                         ></img>
//                       </div>
//                     )}
//                   </div>
//                   <div className="edit-your-header-button-container">
//                     <label
//                       className="header-pic-file-label"
//                       htmlFor="header-pic"
//                     >
//                       <img
//                         className="cam"
//                         src="https://user-images.githubusercontent.com/110946315/219857807-5feb84a5-23c2-4cb4-b4bf-fc6f78c277f1.png"
//                         alt=""
//                       />
//                       Change Your Header
//                     </label>
//                     <input
//                       className="input-for-the-header"
//                       id="header-pic"
//                       name="header-pic"
//                       type="file"
//                       accept="image/*"
//                       onChange={editHeaderImage}
//                       placeholder="Edit Your Header"
//                     ></input>
//                   </div>

//                   <div className="user-page-info">
//                     <div className="profile-picture-container">
//                       {userProf?.profile_image_url ? (
//                         <div className="profile-image">
//                           <img
//                             className="user-page-profile-image"
//                             src={userProf?.profile_image_url}
//                             alt="profile"
//                           ></img>
//                         </div>
//                       ) : (
//                         <div className="profile-image">
//                           <img
//                             className="user-page-profile-image"
//                             src={pfpPicker()}
//                             alt="profile"
//                           ></img>
//                         </div>
//                       )}
//                     </div>
//                     <div className="title-container">
//                       <h1 className="title-label">{userProf?.title}</h1>
//                     </div>
//                     <div className="username-container">
//                       <p className="username-label">{`@${userProf?.username}`}</p>
//                     </div>
//                     {/* <div className="display-name-container"></div> */}
//                     <div className="bio-container">
//                       <div className="bio-label">{userProf?.bio}</div>
//                     </div>
//                     <div className="edit-profile-button-container">
//                       <div className="the-link-to-the-button">
//                         {/* <OpenModalButton
//                       className="the-link-to-the-button"
//                       modalComponent={<EditUserPageForm />}
//                       buttonText="Blog Settings"
//                     /> */}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="middle-part-user-page">
//                   <div className="user-page-nav-bar">
//                     <div className={myPost} onClick={myPostClickHandler}>
//                       Posts
//                     </div>
//                   </div>
//                 </div>
//                 <div className="bottom-part-user-page">
//                   <div className="post-div-container">
//                     <div className={visibleMyPost}>{post}</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <EditUserPageForm />
//         </div>
//       ) : (
//         <div className="user-page-container-outer">
//           {/* if this is NOT the logged in users page */}

//           <div className="inner-user-page-container">
//             <div className="background-of-user-page">
//               <div className="entire-body-part-for-user-page">
//                 <div className="top-part-user-page">
//                   <div className="header-image-container">
//                     {userProf?.header_image_url ? (
//                       <div className="header-image">
//                         <img
//                           className="user-page-header"
//                           src={userProf?.header_image_url}
//                           alt="headerrrr"
//                         ></img>
//                       </div>
//                     ) : (
//                       <div className="header-image">
//                         <img
//                           className="user-page-header"
//                           src={headerPicker()}
//                           alt="header"
//                         ></img>
//                       </div>
//                     )}
//                   </div>

//                   <div className="user-page-info">
//                     <div className="profile-picture-container">
//                       {userProf?.profile_image_url ? (
//                         <div className="profile-image">
//                           <img
//                             className="user-page-profile-image"
//                             src={userProf?.profile_image_url}
//                             alt="profile"
//                           ></img>
//                         </div>
//                       ) : (
//                         <div className="profile-image">
//                           <img
//                             className="user-page-profile-image"
//                             src={pfpPicker()}
//                             alt="profile"
//                           ></img>
//                         </div>
//                       )}
//                     </div>
//                     <div className="title-container">
//                       <h1 className="title-label">{userProf?.title}</h1>
//                     </div>
//                     <div className="username-container">
//                       <p className="username-label">{`@${userProf?.username}`}</p>
//                     </div>

//                     <div className="bio-container">
//                       <div className="bio-label">{userProf?.bio}</div>
//                     </div>
//                     <div className="edit-profile-button-container">
//                       <div className="the-link-to-the-button"></div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="middle-part-user-page">
//                   <div className="user-page-nav-bar">
//                     <div className={myPost} onClick={myPostClickHandler}>
//                       Posts
//                     </div>
//                   </div>
//                 </div>
//                 <div className="bottom-part-user-page">
//                   <div className="post-div-container">
//                     <div className={visibleMyPost}>{post}</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default UserPage;
