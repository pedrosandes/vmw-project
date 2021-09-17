import styled from "styled-components";

export const CardContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 250px;
  max-height: 400px;
  background-color: ${({ theme }) => theme.colors.redSecundary};
  border-radius: 2rem;
  padding: 20px 0 60px 0;
  filter: drop-shadow(4px 4px 30px #fc9ba4);
  cursor: pointer;
`;

export const CardName = styled.span`
  font-family: ${({ theme }) => theme.fonts[0]};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.fs20};
`;

export const CardImage = styled.div`
  max-height: 279px;
`;

export const Image = styled.img``;
