import React from "react";
import CheckBox from "./CheckBox";
import ShowNew from "./ShowNews";

import { useNavigate } from "react-router-dom";

const Health = () => {
  const navigate = useNavigate();
  return (
    <div className="health-container">
      <div className="health-header-container">
        <div className="health-header-title">Biomatch</div>
        <div className="health-header-condition-container">
          <div className="health-header-condition">
            어제에 비해 <br />
            컨디션이 좋아요!
          </div>
        </div>
      </div>
      <CheckBox
        onClick={() => navigate("/main/bmi")}
        title={"나의 건강 상태 측정하기"}
        content={"BMI를 측정하여 나의 건강상태를 확인해 보세요"}
      />
      <CheckBox
        title={"영양제 추천 "}
        content={"AI 채팅을 통해서 영양제를 추천 받아 보아요"}
      />
      <div className="health-news-container-title">건강 매거진</div>
      <ShowNew />
    </div>
  );
};

export default Health;
