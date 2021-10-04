import styled from "styled-components";

export const Container = styled.footer`
  max-width: 1340px;
  margin: 0 auto 50px auto;
  padding: 0 20px;
  color: ${({ theme }) => theme.colors.blackSecundary};
`;

export const Wrapper = styled.section`
  height: 100%;
  border: 3px solid ${({ theme }) => theme.colors.redPrimary};
  border-radius: 20px;
  padding: 20px;
  display: flex;
  gap: 20px;
  font-weight: 500;

  @media screen and (max-width: 880px) {
    flex-direction: column;
  }
`;

export const Copyright = styled.section`
  flex: 2;
`;

export const CopyrightTitle = styled.span`
  font-family: ${({ theme }) => theme.fonts[0]};
  font-size: 2.2rem;
`;

export const CopyrightText = styled.p`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.BlackPrimary};
`;

export const FooterNav = styled.nav`
  flex: 0.8;
  border-left: 3px solid ${({ theme }) => theme.colors.redPrimary};
  padding-left: 30px;
`;

export const ListNav = styled.ul``;

export const CreatedBy = styled.section`
  flex: 1.2;
  border-left: 3px solid ${({ theme }) => theme.colors.redPrimary};
  padding-left: 30px;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const TextBy = styled.p``;

export const Author = styled.span`
  color: ${({ theme }) => theme.colors.redSecundary};
  text-decoration: underline;
`;

export const Social = styled.div`
  display: flex;
  gap: 20px;
`;
