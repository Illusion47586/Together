import React, { useContext } from "react";

import classes from "../styles/css/components/notification.module.css";

import { PhoneIncoming, PhoneSlash, PhoneDisconnect } from "phosphor-react";
import { motion } from "framer-motion";
import { SocketContext } from "../contexts/SocketContext";
import { useHistory } from "react-router-dom";

const Notification = () => {
  const history = useHistory();
  const { answerCall, setCall } = useContext(SocketContext);
  return (
    <motion.div className={classes.box} animate={{ y: -20 }}>
      <span>Incoming call</span>
      <button
        className={classes.green}
        onClick={() => {
          answerCall();
          history.push("/video");
        }}
      >
        <PhoneIncoming />
      </button>
      <button
        className={classes.red}
        onClick={() => setCall({ isReceivingCall: false })}
      >
        <PhoneSlash />
      </button>
      <button
        className={classes.mute}
        onClick={() => setCall({ isReceivingCall: false })}
      >
        <PhoneDisconnect />
      </button>
    </motion.div>
  );
};

export default Notification;
