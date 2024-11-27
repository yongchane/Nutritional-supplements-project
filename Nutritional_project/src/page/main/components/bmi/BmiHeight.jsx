import React from "react";
import BackHeader from "../../../BackHeader";
import BmiCheck from "./BmiCheck";
const BmiHeight = () => {
  return (
    <div className="bmi-height-container">
      <BackHeader back={"/weight"} title={"BMI 측정"} />
      <BmiCheck
        title={"키를 입력해주세요"}
        sub={"정수로 입력해주세요"}
        unit={"cm"}
      />
    </div>
  );
};

export default BmiHeight;
