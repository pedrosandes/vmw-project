import styled from "styled-components";

export const CardContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 250px;
  height: 365px;
  background-color: ${({ theme }) => theme.colors.redSecundary};
  border-radius: 2rem;
  padding: 20px 0 60px 0;
  cursor: pointer;
  position: relative;

  @media screen and (max-width: 481px) {
    height: inherit;
    max-height: 365px;
  }

  &::after {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 64px;
    content: "";
    width: 70%;
    height: 9px;
    background-color: rgba(44, 43, 43, 0.5);
    filter: blur(9px);
  }
`;

export const CardName = styled.span`
  font-family: ${({ theme }) => theme.fonts[0]};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.fs20};

  @media (max-width: 480px) {
    font-size: ${({ theme }) => theme.fontSize.fs12};
  }
`;

export const CardImage = styled.div`
  max-height: 279px;
`;

export const Image = styled.img`
  pointer-events: none;
`;
