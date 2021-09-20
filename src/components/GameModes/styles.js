import styled from "styled-components";

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
