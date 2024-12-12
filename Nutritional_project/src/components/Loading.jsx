import React from "react";
import Lottie from "lottie-react";
import loading from "../api/mock/loading.json";
import styled from "styled-components";
const Loading = () => {
  return (
    <LottieContainer>
      <Lottie animationData={loading} />
    </LottieContainer>
  );
};

export default Loading;
const LottieContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
