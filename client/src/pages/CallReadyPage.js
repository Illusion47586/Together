import React, { Fragment, useContext } from "react";

import JoinMeeting from "../components/JoinMeeting";
import CreateMeeting from "../components/CreateMeeting";
import Notification from "../components/Notification";

import classes from "../styles/css/pages/callReadyPage.module.css";
import { SocketContext } from "../contexts/SocketContext";

const CallReadyPage = () => {
  const { call, callAccepted } = useContext(SocketContext);

  return (
    <Fragment>
      <div className={classes.layout}>
        {/* Title bar */}

        <JoinMeeting />
        <CreateMeeting />
        {/* Self */}
        {/* Change name */}
        {/* Generate Link */}
        {/* Copy link */}
        {/* Call */}
        {/* Notifications */}
      </div>

      {call.isReceivingCall && !callAccepted && <Notification />}
    </Fragment>
  );
};

export default CallReadyPage;
