import React from "react";
import "./Error.css";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
const ErrorPage = ({ msg }) => {
  return (
    <div className="alert-container">
      <div className="warning-icon">
        <WarningAmberIcon color="error" fontSize="large" />
      </div>
      <div className="alert">
        <h4 className="alert-text" style={{ color: "red" }}>
          There was a problem
        </h4>
        <p className="alert-message" style={{ color: "red" }}>
          {msg}
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
