import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { ReactComponent as Atcalendar } from "../assets/foot/Atcalendar.svg";
import { ReactComponent as Athealth } from "../assets/foot/Athealth.svg";
import { ReactComponent as Atpill } from "../assets/foot/Atpill.svg";
import { ReactComponent as Calendar } from "../assets/foot/calendar.svg";
import { ReactComponent as Health } from "../assets/foot/health.svg";
import { ReactComponent as Pill } from "../assets/foot/pill.svg";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;

  return (
    <div className="footer-container">
      <div className="footer-item-container">
        <div
          className={`footer-item footer-item-left ${
            path === "/main" ? "active" : ""
          }`}
          onClick={() => {
            navigate("/main");
          }}
        >
          {path === "/main" ? <Athealth /> : <Health />}
          건강체크
        </div>
        <div
          className={`footer-item ${path === "/record" ? "active" : ""}`}
          onClick={() => {
            navigate("/record");
          }}
        >
          {path === "/record" || path === "/drinkrecord" ? (
            <Atpill />
          ) : (
            <Pill />
          )}
          영양제
        </div>

        <div
          className={`footer-item footer-item-right ${
            path === "/statistic" ? "active" : ""
          }`}
          onClick={() => {
            navigate("/statistic");
          }}
        >
          {path === "/statistic" ? <Atcalendar /> : <Calendar />}
          캘린더
        </div>
      </div>
    </div>
  );
};

export default Footer;
