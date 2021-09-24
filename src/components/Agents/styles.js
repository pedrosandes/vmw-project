import styled, { keyframes } from "styled-components";

export const Container = styled.section`
  width: 100%;
  max-width: 1340px;
  margin: 70px auto 0 auto;
  padding: 0 20px;
`;

export const ContainerAgents = styled.div`
  margin-top: 20px;
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
  margin-top: 50px;
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
  background: #a9a9a9;
`;

export const AgentCard = styled.div`
  width: 250px;
  height: 365px;
  background: #a9a9a9;
  border-radius: 20px;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.2);
    animation: ${loading} 2.5s infinite;
  }
`;

export const WrapperArrowButton = styled.div`
  display: flex;
  align-items: center;
`;

export const ArrowButton = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #a9a9a9;
  margin: 10px;
`;
