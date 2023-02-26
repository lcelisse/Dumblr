import React, { useState } from "react";
import { NavLink, Route, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";

import "./Navigation.css";
import LoginFormPage from "../LoginFormPage";
import SignupFormPage from "../SignupFormPage";
import Feed from "../Post/Feed/Feed";
import logo from "../../assets/d.png";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);
  const [splashPage, setSplashPage] = useState("Sign Up");
  const [removeLogin, setRemoveLogin] = useState("visible");
  const [buttonColor, setButtonColor] = useState("splash-page-login-button-a");

  const history = useHistory();

  const changeButton = (text) => {
    setSplashPage(text);
  };

  const handleClickLogin = () => {
    history.push("/login");
  };

  const handleClickSignup = () => {
    history.push("/signup");
  };

  const removeLogIn = () => {
    setRemoveLogin("login-hidden");
  };

  const changeButtonColorA = () => {
    setButtonColor("splash-page-login-button-a");
  };
  const changeButtonColorB = () => {
    setButtonColor("splash-page-login-button-b");
  };

  const clickFeed = () => {
    history.push("/posts");
  };

  return (
    <div>
      {sessionUser === null ? (
        <div className="splash-page-container">
          <div className="splash-page-top">
            <nav className="splash-page-nav">
              <div className="splash-page-nav-left-side">
                <img
                  src={logo}
                  alt="logo"
                  className="splash-page-logo-d"
                  onClick={clickFeed}
                />
              </div>
              <div className="splash-page-nav-right-side">
                <div></div>
                <button
                  className={buttonColor}
                  onClick={() => {
                    if (splashPage === "Sign Up") {
                      changeButton("Log In");
                      handleClickSignup();
                      removeLogIn();
                      changeButtonColorB();
                    } else {
                      changeButton("Sign Up");
                      handleClickLogin();

                      changeButtonColorA();
                    }
                  }}
                >
                  {splashPage}
                </button>
              </div>
            </nav>
          </div>
          <div className="splash-page-footer"></div>
        </div>
      ) : (
        <div className="nav-bar-logged-in">
          {isLoaded && (
            <div className="links-on-the-nav">
              <div className="left-side-of-nav-bar">
                <NavLink exact to="/posts">
                  <img
                    src={logo}
                    alt="logo"
                    className="splash-page-logo-d"
                    onClick={clickFeed}
                  />
                </NavLink>
              </div>

              <div className="right-side-of-nav-bar">
                <ProfileButton user={sessionUser} />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Navigation;
