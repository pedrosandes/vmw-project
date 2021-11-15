import styled from "styled-components";

export const Wrapper = styled.section`
  padding: 0 20px;
`;

export const Container = styled.section`
  max-width: 130rem;
  margin: 7rem auto 5rem auto;
  border: 0.3rem solid ${({ theme }) => theme.colors.redPrimary};
  padding: 5rem;
  border-radius: 2rem;

  display: flex;
  gap: 3rem;

  @media screen and (max-width: 400px) {
    padding: 2rem;
  }
`;

export const Video = styled.video`
  width: 71rem;
  height: 40rem;

  @media screen and (max-width: 820px) {
    width: 50rem;
    height: 30rem;
  }

  @media screen and (max-width: 620px) {
    width: 30rem;
    height: 20rem;
  }

  @media screen and (max-width: 400px) {
    width: 25rem;
  }

  @media screen and (max-width: 300px) {
    width: 20rem;
  }
`;

export const Link = styled.a`
  display: block;
  font-size: ${({ theme }) => theme.fontSize.fs20};
  margin: 10px 0;
`;

export const Navigation = styled.nav`
  position: sticky;
  top: 10rem;
  border: 3px solid ${({ theme }) => theme.colors.redPrimary};
  padding: 3rem 5rem;
  border-radius: 1rem;
  max-height: 35rem;

  @media screen and (max-width: 1300px) {
    display: none;
  }
  ul {
    padding: 0 3rem;

    li {
      padding: 0.5rem 0;

      a {
        margin: 0;
      }
    }
  }
`;

export const ContentTexts = styled.section`
  max-width: 75.8rem;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.fs4};
  max-width: 61.5rem;
  line-height: 5rem;
  font-family: ${({ theme }) => theme.fonts[0]};
  @media screen and (max-width: 400px) {
    font-size: ${({ theme }) => theme.fontSize.fs24};
    line-height: 2.4rem;
  }
`;

export const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.blackPrimary};
  margin: 3rem 0;
  span {
    font-weight: 500;
  }

  @media screen and (max-width: 400px) {
    font-size: 1.4rem;
  }
`;

export const List = styled.ul`
  padding: 0 4rem;
  margin-top: 2rem;
`;

export const ListItem = styled.li`
  list-style: disc;
  color: ${({ theme }) => theme.colors.blackPrimary};
  padding: 0.6rem 0;

  @media screen and (max-width: 400px) {
    font-size: 1.4rem;
  }
`;
