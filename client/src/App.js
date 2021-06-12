import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import VideoCallPage from "./pages/VideoCallPage";

import "./styles/css/main.css";

const App = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/video" />
      </Route>
      <Route path="/video" exact>
        <VideoCallPage />
      </Route>
    </Switch>
  );
};

export default App;
