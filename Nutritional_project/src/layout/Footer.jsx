import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { ReactComponent as Edit } from "../assets/footer/footeredit.svg";
import { ReactComponent as ActiveEdit } from "../assets/footer/ActiveEdit.svg";
import { ReactComponent as ActiveUp } from "../assets/footer/Activetrendingup.svg";
import { ReactComponent as Up } from "../assets/footer/trendingup.svg";
import { ReactComponent as Union } from "../assets/footer/Union.svg";
import { ReactComponent as ActiveUnion } from "../assets/footer/ActiveUnion.svg";

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

  // 클릭된 항목의 상태를 관리하는 state 추가
  const [activeItem, setActiveItem] = useState(null);

  return (
    <div className="footer-container">
      <div className="footer-item-container">
        <div
          className={`footer-item footer-item-left ${
            path === "/main" ? "active" : ""
          }`}
          onClick={() => {
            setActiveItem("home");
            navigate("/main");
          }}
        >
          {path === "/main" ? <Athealth /> : <Health />}
          건강체크
        </div>
        <div
          className={`footer-item ${path === "/record" ? "active" : ""}`}
          onClick={() => {
            setActiveItem("record");
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
            setActiveItem("statistic");
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
