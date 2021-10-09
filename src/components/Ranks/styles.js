import styled from "styled-components";

export const Container = styled.section`
  background-color: ${({ theme }) => theme.colors.redPrimary};
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1340px;
  margin: 70px auto;
  padding: 50px 20px;
`;

export const ContainerRanks = styled.div`
  margin: 50px 0;
  display: flex;
  gap: 113px;

  @media screen and (max-width: 1400px) {
    flex-direction: column;
    align-items: center;
    gap: 50px;
  }
`;

export const Row = styled.div`
  display: flex;
  gap: 113px;

  @media screen and (max-width: 1400px) {
    gap: 50px;
  }

  @media screen and (max-width: 570px) {
    flex-direction: column;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
