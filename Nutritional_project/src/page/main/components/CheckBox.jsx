import React from "react";

const CheckBox = ({ title, content, onClick }) => {
  return (
    <div className="health-check-container" onClick={onClick}>
      <div className="health-check-box">
        <div className="health-check-title">{title}</div>
        <div className="health-check-content">{content}</div>
      </div>
    </div>
  );
};

export default CheckBox;
