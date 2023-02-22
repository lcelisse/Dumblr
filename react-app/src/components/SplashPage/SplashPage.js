import { useState } from "react";
import "./SplashPage.css";
import logo from "../../assets/d.png";
import { useHistory } from "react-router-dom";
import { signUp } from "../../store/session";
import LoginFormPage from "../LoginFormPage";

export default function SplashPage() {
  const [splashPage, setSplashPage] = useState("Sign Up");
  const [removeLogin, setRemoveLogin] = useState("visible");

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

  return (
    <div className="splash-page-container">
      <div className="splash-page-top">
        <nav className="splash-page-nav">
          <div className="splash-page-nav-left-side">
            <img src={logo} alt="logo" className="splash-page-logo-d" />
          </div>
          <div className="splash-page-nav-right-side">
            <button
              className="splash-page-login-button"
              onClick={() => {
                if (splashPage === "Sign Up") {
                  changeButton("Log In");
                  handleClickSignup();
                  removeLogIn();
                } else {
                  changeButton("Sign Up");
                  handleClickLogin();
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
  );
}
