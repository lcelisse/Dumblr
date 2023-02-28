import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";

import Feed from "./components/Post/Feed/Feed";
import LikesPage from "./components/LikesPage/LikesPage";

function App() {
  const user = useSelector((state) => state.session.user);

  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Switch>
        {!user?.id ? (
          <switch>
            <Navigation isLoaded={isLoaded} />
            <Route path="/login">
              <LoginFormPage />
            </Route>
            <Route path="/signup">
              <SignupFormPage />
            </Route>
            <Route path="/posts">
              <Feed />
            </Route>
          </switch>
        ) : (
          <div className="The-Body">
            <Navigation isLoaded={isLoaded} />
            <Route path="/posts">
              <Feed />
            </Route>
            <Route path="/users/:userId/likes">
              <LikesPage isLoaded={isLoaded} />
            </Route>
          </div>
        )}
        <Navigation isLoaded={isLoaded} />
        <Route path="/posts">
          <Feed />
        </Route>
        <Route path="/users/:userId/likes">
          <LikesPage isLoaded={isLoaded} />
        </Route>
      </Switch>
    </>
  );
}

export default App;
