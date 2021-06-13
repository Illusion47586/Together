import React, { useContext } from "react";

import classes from "../styles/css/components/createMeeting.module.css";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { CopySimple } from "phosphor-react";
import { SocketContext } from "../contexts/SocketContext";

const CreateMeeting = () => {
  const { me } = useContext(SocketContext);

  return (
    <div className={classes.createMeeting}>
      <h2>Share</h2>
      <div>{me}</div>
      <CopyToClipboard text={me}>
        <button className="btn-white">
          <span>Copy</span>
          <CopySimple weight="bold" />
        </button>
      </CopyToClipboard>
    </div>
  );
};

export default CreateMeeting;
