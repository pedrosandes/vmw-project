import styled from "styled-components";

export const TitleStyled = styled.h2`
  font-family: ${({ theme }) => theme.fonts[0]};
  font-size: ${({ theme }) => theme.fontSize.fs32};
  color: ${({ fontColor }) => fontColor};
  text-transform: uppercase;
  letter-spacing: 0.03em;
  font-weight: 500;
`;
