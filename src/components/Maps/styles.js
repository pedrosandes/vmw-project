import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

export const MapsContainer = styled.section`
  width: 100%;
  max-width: 1280px;
  margin: 70px auto;
  padding: 0 20px;
`;

export const MapsList = styled.ul`
  display: flex;
  margin: 50px 0 50px 0;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const MapsItem = styled.li`
  width: 200px;
  height: 500px;
  position: relative;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.blackPrimary};

  @media screen and (max-width: 768px) {
    height: 300px;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    height: 150px;
  }
`;

export const MapImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1);
  transition: transform 0.1s;
  background: rgba(250, 68, 84, 0.5);

  &:hover {
    transform: scale(1.1);
    filter: blur(2px);
  }
`;

export const MapName = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const MapLink = styled(Link)``;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;

/* Skeleton */

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
export const MapsItemSkeleton = styled(MapsItem)`
  background: rgba(250, 68, 84, 0.5);
`;

export const Button = styled.div`
  width: 300px;
  min-height: 50px;
  border-radius: 5px;
  background: rgba(250, 68, 84, 0.5);
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
