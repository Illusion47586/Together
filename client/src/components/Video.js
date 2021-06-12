import { motion } from "framer-motion";
import React, { Fragment, useRef } from "react";

import VideoController from "./VideoController";

import classes from "../styles/css/components/video.module.css";

const Video = () => {
  const constraintsRef = useRef(null);
  return (
    <Fragment>
      <motion.div className={classes.userVideo} ref={constraintsRef}>
        USER
      </motion.div>
      <motion.div
        className={classes.myVideo}
        animate={{ x: -10, y: -10 }}
        drag={true}
        dragConstraints={constraintsRef}
      >
        ME
      </motion.div>
      <VideoController constraintsRef={constraintsRef} />
    </Fragment>
  );
};

export default Video;
