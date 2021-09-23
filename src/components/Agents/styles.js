import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  max-width: 1340px;
  margin: 70px auto 0 auto;
  padding: 0 20px;
`;

export const ContainerAgents = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 385px;

  @media screen and (max-width: 481px) {
    height: inherit;
    max-height: 365px;
  }
`;

export const WrapperButton = styled.div`
  text-align: center;
  margin-top: 50px;
`;
