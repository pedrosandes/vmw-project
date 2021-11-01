import styled from "styled-components";

export const Container = styled.section`
  max-width: 1190px;
  margin: 50px auto;
  padding: 0 20px;
`;

export const ContainerAgents = styled.section`
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  gap: 50px;

  @media screen and (max-width: 1190px) {
    justify-content: center;
  }
`;
