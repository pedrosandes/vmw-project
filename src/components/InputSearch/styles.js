import styled from "styled-components";

export const SearchContainer = styled.div`
  margin-top: 30px;
  position: relative;
  width: 350px;
  height: 50px;

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const InputSearch = styled.input`
  font-size: 1.8rem;
  border: 3px solid ${({ theme }) => theme.colors.blackSecundary};
  border-radius: 5px;
  height: 100%;
  width: 100%;
  padding-left: 15px;
  padding-right: 35px;
  color: ${({ theme }) => theme.colors.blackPrimary};
  outline: none;
`;

export const Icon = styled.img`
  width: 25px;
  height: 25px;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
`;
