import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import { SocketContextProvider } from "./contexts/SocketContext";
import VideoCallPage from "./pages/VideoCallPage";
import CallReadyPage from "./pages/CallReadyPage";

import "./styles/css/main.css";
import "./styles/css/base/typography.css";
import "./styles/css/base/removeFocusBorder.css";
import "./styles/css/base/inputs.css";

const App = () => {
  return (
    <SocketContextProvider>
      <Switch>
        <Route path="/" exact>
          <CallReadyPage />
        </Route>
        <Route path="/video" exact>
          <VideoCallPage />
        </Route>
      </Switch>
    </SocketContextProvider>
  );
};

export default App;
