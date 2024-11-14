import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ReactComponent as ActiveDot } from "../../../../assets/health/Activedot.svg";
import { ReactComponent as dot } from "../../../../assets/health/dot.svg";

const BmiCheck = ({ title, sub, unit }) => {
  const [num, setNum] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;

  const CalHandler = (e) => {
    e.preventDefault();
    alert(`입력한 값: ${num}`);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    // 숫자만 허용하고, 200 이하로 제한
    if (value === "" || (Number(value) <= 200 && /^\d*$/.test(value))) {
      setNum(value);
    }
  };

  const nextPage = () => {
    if (path === "/main/weight") {
      navigate("/main/height");
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
        <button
          type="submit"
          className={`bmi-num-submit${num ? "active" : ""}`}
          onClick={nextPage}
        >
          다음
        </button>
      </form>
    </div>
  );
};

export default BmiCheck;
