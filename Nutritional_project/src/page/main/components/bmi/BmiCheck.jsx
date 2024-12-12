import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { ReactComponent as Next } from "../../../../assets/health/next.svg";
import { ReactComponent as Before } from "../../../../assets/health/before.svg";

const BmiCheck = ({ title, sub, unit }) => {
  const [weight, setWeight] = useState(null); // 체중 상태
  const [height, setHeight] = useState(null); // 신장 상태
  const [num, setNum] = useState(null); // 현재 입력된 값 상태
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;

  // 값 처리 함수
  const handleChange = (e) => {
    const value = e.target.value;
    if (value === "" || (Number(value) <= 200 && /^\d*$/.test(value))) {
      setNum(value);
    }
  };

  // 제출 처리
  const CalHandler = (e) => {
    e.preventDefault();
    if (num === null) {
      alert("값을 입력해주세요");
    } else {
      // 여기서 입력한 값에 따라 상태를 업데이트
      if (path === "/weight") {
        setWeight(num);
      } else if (path === "/height") {
        setHeight(num);
      }
      alert(`입력한 값: ${num}`);
    }
  };

  // 페이지 이동
  const nextPage = () => {
    if (num !== null) {
      if (path === "/weight") {
        // 체중 입력 후, 신장 입력 페이지로 이동
        navigate("/height");
      } else if (path === "/height") {
        // 신장 입력 후, 결과 페이지로 이동
        navigate("/result");
      }
    }
  };

  return (
    <div className="bmi-main-container">
      <div className="bmi-main-header-container">
        <div className="bmi-main-header-title">{title}</div>
        <div className="bmi-main-header-subtitle">{sub}</div>
      </div>
      <form onSubmit={CalHandler} className="bmi-num-container">
        <div className="bmi-show-num">
          <input
            type="text"
            className="bmi-input-num"
            value={num}
            onChange={handleChange}
            inputMode="numeric"
            max="200"
            pattern="[0-9]*"
          />
          <div className="bmi-num-unit">{unit}</div>
        </div>
        {path === "/weight" ? <Before /> : <Next />}
        <button
          type="submit"
          className={`bmi-num-submit ${num ? "active" : ""}`}
          onClick={nextPage}
        >
          다음
        </button>
      </form>
    </div>
  );
};

export default BmiCheck;
