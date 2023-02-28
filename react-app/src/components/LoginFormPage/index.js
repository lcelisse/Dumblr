import React, { useState } from "react";
import { login } from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import "./LoginForm.css";
import dumb from "../../assets/dumb.png";
function LoginFormPage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    } else {
      history.push("/posts");
    }
  };

  return (
    <div className="log-in-container">
      <img src={dumb} className="full-logo-splash-page" alt=""></img>
      <div className="log-in-form-container">
        <form onSubmit={handleSubmit} className="the-form-container">
          <ul>
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
          <label>
            Email
            <input
              className="input-top-part"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Password
            <input
              className="input-top-part"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <button type="submit">Log In</button>
          <button
            type="submit"
            onClick={(e) => {
              setEmail("pam@aa.io");
              setPassword("password");
            }}
          >
            Demo user
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginFormPage;
