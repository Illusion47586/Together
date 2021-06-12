import React from "react";
import Video from "../components/Video";

import classes from "../styles/css/layout/grid.module.css";

const VideoCallPage = () => {
  return (
    <div className={classes.gridContainer}>
      <Video />
    </div>
  );
};

export default VideoCallPage;
