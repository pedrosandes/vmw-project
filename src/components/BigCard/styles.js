import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  max-width: 1340px;
  margin: 50px auto 0 auto;
  padding: 0 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  border: 2px solid #fa4454;
  border-radius: 20px;
  padding: 0 100px;

  @media (max-width: 985px) {
    flex-direction: column-reverse;
    align-items: center;
    padding: 0 50px 20px 50px;
  }

  @media (max-width: 516px) {
    padding: 0 20px 20px 20px;
  }
`;

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 985px) {
    align-items: center;
  }
`;

export const Title = styled.h1`
  width: 100%;
  max-width: 514px;
  font-size: ${({ theme }) => theme.fontSize.fs62};
  line-height: 64px;

  @media (max-width: 1300px) {
    font-size: ${({ theme }) => theme.fontSize.fs46};
    line-height: 46px;
  }

  @media (max-width: 985px) {
    text-align: center;
  }

  @media (max-width: 480px) {
    margin-top: 20px;
    font-size: ${({ theme }) => theme.fontSize.fs24};
    line-height: 24px;
  }
`;
export const Text = styled.p`
  width: 100%;
  max-width: 418px;
  margin: 30px 0 40px 0;
  font-weight: 500;

  @media (max-width: 1300px) {
    margin: 20px 0 30px 0;
  }

  @media (max-width: 985px) {
    text-align: center;
  }

  @media (max-width: 330px) {
    font-size: ${({ theme }) => theme.fontSize.fs12};
  }
`;

export const Button = styled.button`
  width: 100%;
  max-width: 397px;
  background-color: ${({ theme }) => theme.colors.redPrimary};
  font-family: ${({ theme }) => theme.fonts[0]};
  font-weight: 700;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  height: 60px;
  cursor: pointer;
  transition: all 0.4s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.redPrimary};
    border: 2px solid ${({ theme }) => theme.colors.redPrimary};
  }

  @media (max-width: 1300px) {
    max-width: 300px;
  }

  @media (max-width: 330px) {
    max-width: inherit;
    width: 80%;
  }
`;

export const Image = styled.img`
  min-width: 240px;
  pointer-events: none;
`;
