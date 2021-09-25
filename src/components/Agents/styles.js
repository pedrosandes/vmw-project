import styled, { keyframes } from "styled-components";

export const Container = styled.section`
  width: 100%;
  max-width: 1340px;
  margin: 70px auto 0 auto;
  padding: 0 20px;
`;

export const ContainerAgents = styled.div`
  margin: 50px 0;
  display: flex;
  justify-content: center;
  height: 385px;

  @media screen and (max-width: 481px) {
    height: inherit;
    max-height: 365px;
  }
`;

export const WrapperButton = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;

/* Skeleton  */

const loading = keyframes`
  0% {
    transform: translateX(-150%);
  }
  50% {
    transform: translateX(-60%);
  }
  100% {
    transform: translateX(200%);
  }
`;

export const ContainerCarousel = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  flex-wrap: wrap;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    max-height: 365px;
  }
`;

export const Button = styled.div`
  width: 300px;
  min-height: 50px;
  border-radius: 5px;
  background: rgba(250, 68, 84, 0.5);
`;

export const AgentCard = styled.div`
  width: 250px;
  height: 365px;
  background: rgba(250, 68, 84, 0.5);
  border-radius: 20px;
  overflow: hidden;
`;

export const ShimmerWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform: skewX(-20deg);
`;

export const Shimmer = styled.div`
  position: absolute;
  width: 50%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  animation: ${loading} 1s infinite;
`;

export const WrapperArrowButton = styled.div`
  display: flex;
  align-items: center;
`;

export const ArrowButton = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(250, 68, 84, 0.5);
  margin: 10px;
`;
