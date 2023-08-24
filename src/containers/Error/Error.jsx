import React from "react";
import "./Error.css";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
const Error = ({ msg }) => {
  return (
    <div className="alert-container">
      <div className="warning-icon">
        <WarningAmberIcon color="error" fontSize="large" />
      </div>
      <div className="alert">
        <h4 className="alert-text">There was a problem</h4>
        <p className="alert-message">{msg}</p>
      </div>
    </div>
  );
};

export default Error;