import { motion } from "framer-motion";
import useWindowDimensions from "../hooks/windowDimensions";

import classes from "../styles/css/components/videoController.module.css";

const VideoController = (props) => {
  const { width } = useWindowDimensions();
  return (
    <motion.div
      className={classes.controller}
      animate={width >= 1200 ? { y: -10 } : { x: 10, y: -10 }}
      drag={true}
      dragConstraints={props.constraintsRef}
    >
      hello
    </motion.div>
  );
};

export default VideoController;
