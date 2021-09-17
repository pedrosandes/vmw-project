import styled from "styled-components";

export const ButtonStyled = styled.button`
  position: relative;
  min-width: 250px;
  min-height: 50px;
  font-weight: 700;

  background-color: transparent;
  color: ${({ fontColor }) => fontColor};
  border-radius: 5px;
  text-transform: uppercase;

  cursor: pointer;
  padding: 0px 20px;

  &::after,
  ::before {
    position: absolute;
    content: "";
    width: calc(100% - 6px);
    height: calc(100% - 6px);
    border: 3px solid ${({ borderColor }) => borderColor};
    left: 0;
    bottom: 0;
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: translate(-5px, -5px);
  }
  &:hover::before {
    transform: translate(5px, 5px);
  }
`;
