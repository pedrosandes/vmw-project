import styled from "styled-components";

export const Container = styled.section`
  width: 250px;
  height: 300px;
  border: 5px solid ${({ theme }) => theme.colors.white};
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 200px;
  height: 200px;
  margin-top: 20px;
  pointer-events: none;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const RankName = styled.span`
  font-size: ${({ theme }) => theme.fontSize.fs32};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 500;
  text-transform: uppercase;
`;
