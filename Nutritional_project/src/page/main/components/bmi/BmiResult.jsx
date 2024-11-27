import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import loading from "../../../../api/mock/loading.json";
import styled from "styled-components";
import BackHeader from "../../../BackHeader";
import { ReactComponent as Dot } from "../../../../assets/health/rdot.svg";
import { useNavigate } from "react-router-dom";
const BmiResult = () => {
  const [loadingVisible, setLoadingVisible] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    // 3초 후에 loadingVisible을 false로 설정
    const timer = setTimeout(() => {
      setLoadingVisible(false);
    }, 3000);
    // 타이머 정리 즉 setTimeout 함수를 종료
    return () => clearTimeout(timer);
  }, []);

  return (
    <ResultContainer>
      {loadingVisible ? (
        <LottieContainer>
          <LottieTitle> BMI 를 측정중입니다. </LottieTitle>
          <Lottie animationData={loading} />
        </LottieContainer>
      ) : (
        <Result>
          <BackHeader title={"BMI 측정"} />
          {/* bmi 측정후 관련 api 연동 필요 */}
          <ResultHeader>
            <ResultTitle> 정상제충,일반적인 건강상태 </ResultTitle>
            <ResultNum> 20.0 </ResultNum>
          </ResultHeader>
          <DotContainer>
            <Dot />
            <Dot />
            <Dot />
          </DotContainer>
          <ResultTextContainer>
            {" "}
            <Content>내용 api연동 필요</Content>{" "}
          </ResultTextContainer>
          <FooterBtn>
            <Btn onClick={() => navigate("/main")}>홈으로</Btn>
          </FooterBtn>
        </Result>
      )}
    </ResultContainer>
  );
};

export default BmiResult;

const LottieContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const LottieTitle = styled.div`
  width: 140px;
  height: 20px;
  margin-bottom: 30px;
  color: #6832e2;
  font-size: 16px;
  font-weight: 700;
`;
const ResultContainer = styled.div`
  width: 100%;
  height: 100vh;
`;
const Result = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 47px;
  overflow: scroll;
  position: relative;
`;
const ResultTitle = styled.div`
  height: 49px;
  color: #000;
  font-size: 16px;
  font-weight: 600;
`;
const ResultHeader = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;
const ResultNum = styled.div`
  height: 40px;
  margin-bottom: 12px;
  color: #6832e2;
  font-size: 30px;
  font-weight: 900;
`;
const DotContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 7px;
`;
const ResultTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 11px;
`;
const Content = styled.div`
  border-radius: 12px;
  background: #eeeff5;
  box-shadow: 2px 2px 7.8px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 351px;
  padding: 39.5px 21.142px;
`;
const FooterBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 102px;
`;
const Btn = styled.div`
  width: 350px;

  border-radius: 8px;
  background: #6832e2;
  color: #fff;
  display: flex;
  height: 48px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
`;
