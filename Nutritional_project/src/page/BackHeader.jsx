import React from "react";
import { ReactComponent as Back } from "../assets/health/back.svg";
import { ReactComponent as WBack } from "../assets/health/wback.svg";
import { useLocation, useNavigate } from "react-router-dom";
const BackHeader = ({ title, back }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;

  return (
    <div className="back-container">
      <div className="back-header-container">
        <div
          className="back-header-back"
          onClick={() => {
            navigate(back);
          }}
        >
          {path === "/chat" ? <WBack /> : <Back />}
        </div>
        <div className="back-header-title">{title}</div>
      </div>
    </div>
  );
};

export default BackHeader;
