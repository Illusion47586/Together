import { motion } from "framer-motion";
import useWindowDimensions from "../hooks/windowDimensions";

import classes from "../styles/css/components/videoController.module.css";

import { PhoneDisconnect } from "phosphor-react";
import { useContext } from "react";
import { SocketContext } from "../contexts/SocketContext";

const VideoController = (props) => {
  const { leaveCall } = useContext(SocketContext);
  const { width } = useWindowDimensions();

  return (
    <motion.div
      className={classes.controller}
      animate={width >= 1200 ? { y: -10 } : { x: 10, y: -10 }}
      drag={true}
      dragConstraints={props.constraintsRef}
    >
      <button
        onClick={() => {
          leaveCall();
        }}
      >
        <PhoneDisconnect />
      </button>
    </motion.div>
  );
};

export default VideoController;
