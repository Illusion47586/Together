import { motion } from "framer-motion";

import classes from "../styles/css/components/videoController.module.css";

const VideoController = (props) => {
  return (
    <motion.div
      className={classes.controller}
      animate={{ y: -10 }}
      drag={true}
      dragConstraints={props.constraintsRef}
    >
      hello
    </motion.div>
  );
};

export default VideoController;
