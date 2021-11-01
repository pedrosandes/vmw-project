import styled from "styled-components";

export const Container = styled.section`
  max-width: 1340px;
  margin: 50px auto;
  padding: 0 20px;
`;

export const ContainerAgents = styled.section`
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  justify-content: space-between;

  @media screen and (max-width: 890px) {
    justify-content: center;
  }
`;
