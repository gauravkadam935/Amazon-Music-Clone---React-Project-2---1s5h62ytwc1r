import React from "react";
import "./animation.css";
const Animation = () => {
  return (
    <div className="playing">
      <span className="playing__bar playing__bar1"></span>
      <span className="playing__bar playing__bar2"></span>
      <span className="playing__bar playing__bar3"></span>
    </div>
  );
};

export default Animation;