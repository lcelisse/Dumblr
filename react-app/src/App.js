import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";

import Feed from "./components/Post/Feed/Feed";
import LikesPage from "./components/LikesPage/LikesPage";
import Following from "./components/Following/Following";
import LandingPage from "./components/LandingPage/LandingPage";
import AboutUs from "./components/AboutUs/AboutUs";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import UserPage from "./components/UserPage/UserPage";

function App() {
  const user = useSelector((state) => state.session.user);
  const following = useSelector((state) => state.session.user);
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

            <Route exact path="/posts">
              <Feed />
            </Route>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route exact path="/login">
              <LoginFormPage />
            </Route>
            <Route exact path="/signup">
              <SignupFormPage />
            </Route>
            <Route exact path="*">
              <PageNotFound />
            </Route>
            <Route path="/">
              <AboutUs />
            </Route>
          </switch>
        ) : (
          <div className="The-Body">
            <Navigation isLoaded={isLoaded} />{" "}
            <Route exact path="/posts">
              <Feed />
            </Route>
            <Route exact path="/users/:userId/likes">
              <LikesPage isLoaded={isLoaded} />
            </Route>
            <Route exact path="/users/following">
              <Following isLoaded={isLoaded} />
            </Route>
            <Route path="/users/:userId">
              <UserPage />
            </Route>
            <Route exact path="/">
              <LandingPage />
            </Route>{" "}
            <Route path="/">
              <AboutUs />
            </Route>{" "}
            <Route exact path="*">
              <PageNotFound />
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
        <Route path="/users/following">
          <Following isLoaded={isLoaded} />
        </Route>
      </Switch>
    </>
  );
}

export default App;
