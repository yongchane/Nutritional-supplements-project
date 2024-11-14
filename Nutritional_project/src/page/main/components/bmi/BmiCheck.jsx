import React, { useState } from "react";

const BmiCheck = ({ title, sub, unit }) => {
  const [num, setNum] = useState("");

  const CalHandler = (e) => {
    e.preventDefault();
    alert(`입력한 값: ${num}`);
  };

  const handleChange = (e) => {
    setNum(e.target.value);
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
            className="bmi-input-num"
            value={num}
            onChange={handleChange}
          />
          <div className="bmi-num-unit">{unit}</div>
        </div>
        <button type="submit">go</button>
      </form>
    </div>
  );
};

export default BmiCheck;
