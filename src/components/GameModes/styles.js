import styled, { keyframes } from "styled-components";

export const Container = styled.section`
  margin-top: 100px;
  background-color: ${({ theme }) => theme.colors.redPrimary};
  padding: 0 20px;
  position: relative;
  overflow: hidden;

  &::before {
    content: "Valorant";
    font-size: 300px;
    text-transform: uppercase;
    -webkit-text-stroke: 2px rgba(218, 218, 218, 0.2);
    color: transparent;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1340px;
  margin: 0 auto;
  padding: 50px 0;
`;

export const ContainerModes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  margin-top: 50px;
`;

export const Row = styled.div`
  display: flex;
  gap: 50px;

  @media (max-width: 561px) {
    justify-content: center;
    flex-direction: column;
  }
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

export const WrapperButton = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  overflow: hidden;
`;

export const Button = styled.div`
  width: 300px;
  min-height: 50px;
  border-radius: 5px;
  border: 2px solid ${({ theme }) => theme.colors.white};

  @media screen and (max-width: 320px) {
    width: 240px;
  }
`;

export const GameModeCard = styled.div`
  overflow: hidden;
  width: 400px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 3px solid ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  box-shadow: 0px 0px 20px rgba(68, 68, 68, 0.3);

  @media (max-width: 848px) {
    width: 100%;
    max-width: 400px;
    min-width: 260px;
  }
`;
