import React from "react";
import { ReactComponent as Back } from "../assets/health/back.svg";
import { useLocation, useNavigate } from "react-router-dom";
const BackHeader = ({ title, back }) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="back-container">
      <div className="back-header-container">
        <div
          className="back-header-back"
          onClick={() => {
            navigate(back);
          }}
        >
          <Back />
        </div>
        <div className="back-header-title">{title}</div>
      </div>
    </div>
  );
};

export default BackHeader;
