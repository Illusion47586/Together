import { motion } from "framer-motion";
import React, { Fragment, useContext, useEffect, useRef } from "react";

import VideoController from "./VideoController";

import classes from "../styles/css/components/video.module.css";
import { SocketContext } from "../contexts/SocketContext";

const Video = () => {
  const constraintsRef = useRef(null);
  const { callAccepted, myVideo, userVideo, callEnded, stream, setStream } =
    useContext(SocketContext);

  useEffect(() => {
    if (navigator.mediaDevices)
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: true })
        .then((currentStream) => {
          setStream(currentStream);
          myVideo.current.srcObject = currentStream;
        });
  }, [myVideo, setStream]);

  return (
    <Fragment>
      <motion.div className={classes.userVideo} ref={constraintsRef}>
        {callAccepted && !callEnded && (
          <video playsInline ref={userVideo} autoPlay />
        )}
      </motion.div>
      <motion.div
        className={classes.myVideo}
        animate={{ x: -10, y: -10 }}
        drag={true}
        dragConstraints={constraintsRef}
      >
        {stream && <video playsInline ref={myVideo} autoPlay />}
      </motion.div>

      {callAccepted && !callEnded && (
        <VideoController constraintsRef={constraintsRef} />
      )}
    </Fragment>
  );
};

export default Video;
