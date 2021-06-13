import React, { useContext, useRef, useState } from "react";

import classes from "../styles/css/components/joinMeeting.module.css";

import { PhoneOutgoing } from "phosphor-react";
import { SocketContext } from "../contexts/SocketContext";
import { useHistory } from "react-router-dom";

const JoinMeeting = () => {
  const { callUser } = useContext(SocketContext);
  const history = useHistory();
  const idRef = useRef();
  const [idToCall, setIdToCall] = useState("");
  return (
    <div className={classes.joinMeeting}>
      <h2>Call</h2>
      <input
        placeholder="Enter code here"
        type="text"
        id="ID to call"
        ref={idRef}
        value={idToCall}
        onChange={(e) => setIdToCall(e.target.value)}
        required
        autoComplete="Off"
      />
      <button
        onClick={() => {
          if (idRef.current.value) {
            callUser(idToCall);
            history.push("/video");
          }
        }}
      >
        <span> Call </span>
        <PhoneOutgoing weight="bold" />
      </button>
    </div>
  );
};

export default JoinMeeting;
