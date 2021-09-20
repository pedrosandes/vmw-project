import styled from "styled-components";

export const Container = styled.section`
  width: 400px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 3px solid ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  box-shadow: 0px 0px 20px rgba(68, 68, 68, 0.3);

  @media (max-width: 848px) {
    width: 100%;
    max-width: 400px;
    min-width: 260px;
  }
`;

export const Image = styled.img`
  max-width: 128px;
  pointer-events: none;
`;

export const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSize.fs32};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 500;
  margin-top: 30px;
`;
