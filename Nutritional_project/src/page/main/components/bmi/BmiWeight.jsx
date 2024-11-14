import React from "react";
import BackHeader from "../../../BackHeader";
import BmiCheck from "./BmiCheck";

const BmiWeight = () => {
  return (
    <div className="bmi-weight-container">
      <BackHeader back={"/main"} title={"BMI 측정"} />
      <BmiCheck
        title={"몸무게를 입력해주세요"}
        sub={"정수로 입력해주세요"}
        unit={"kg"}
      />
    </div>
  );
};

export default BmiWeight;
