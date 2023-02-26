import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";
import OpenModalButton from "../OpenModalButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import { useHistory } from "react-router-dom";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();
  const history = useHistory();

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (!ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  });

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    history.push("/login");
  };

  const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");
  const closeMenu = () => setShowMenu(false);

  return (
    <>
      <div className="profile-container-button">
        <button className="navigation-profile-button" onClick={openMenu}>
          <i class="fa-solid fa-user"></i>
        </button>
      </div>

      <ul className={ulClassName} ref={ulRef}>
        {user ? (
          <>
            <div className="account-profile-dropdown">
              <div className="account-container">
                <p className="account-logout">Account</p>
              </div>
              <div className="logout-button">
                <div className="the-button-to-submit">
                  <button
                    onClick={handleLogout}
                    className="logout-button-profile"
                  >
                    Log Out
                  </button>
                </div>
              </div>
            </div>
            <div className="info-container">
              <li>{user.username}</li>
            </div>
            <div className="info-container">
              <li>{user.email}</li>
            </div>
          </>
        ) : (
          <>
            <OpenModalButton
              buttonText="Log In"
              onItemClick={closeMenu}
              modalComponent={<LoginFormModal />}
            />

            <OpenModalButton
              buttonText="Sign Up"
              onItemClick={closeMenu}
              modalComponent={<SignupFormModal />}
            />
          </>
        )}
      </ul>
    </>
  );
}

export default ProfileButton;
