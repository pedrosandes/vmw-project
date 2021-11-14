import styled from "styled-components";

export const Container = styled.section`
  max-width: 1300px;
  margin: 70px auto 50px auto;
  border: 3px solid ${({ theme }) => theme.colors.redPrimary};
  padding: 50px;
  border-radius: 20px;

  display: flex;
  gap: 30px;
`;

export const Navigation = styled.nav`
  border: 3px solid ${({ theme }) => theme.colors.redPrimary};
  padding: 30px 50px;
  border-radius: 10px;
  max-height: 452px;
`;

export const ContentTexts = styled.section`
  max-width: 75.8rem;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.fs4};
  max-width: 61.5rem;
  line-height: 5rem;
  font-family: ${({ theme }) => theme.fonts[0]};
`;

export const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.blackPrimary};
  margin: 30px 0;
  span {
    font-weight: 500;
  }
`;
