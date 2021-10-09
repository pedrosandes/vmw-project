import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 481px) {
    display: none;
  }
`;

export const ButtonArrowStyled = styled.button`
  border-radius: 50%;
  background-color: transparent;
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  img {
    pointer-events: none;
  }
`;
