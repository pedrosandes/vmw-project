import styled from "styled-components";

export const ContainerWrapper = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.redSecundary};
  height: 7rem;
  position: sticky;
  top: 0;
  left: 0;
`;

export const ContainerContent = styled.div`
  max-width: 1340px;
  padding: 0 20px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 897px) {
    padding-top: 5px;
  }
`;

export const Logo = styled.img`
  max-width: initial;
`;

export const ContainerLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 35px;

  @media (max-width: 897px) {
    display: none;
  }
`;

export const List = styled.ul`
  display: flex;

  .selected {
    text-decoration: underline;
    text-underline-offset: 3px;
    text-decoration-thickness: 3px;
  }
`;

export const ListItem = styled.li`
  a {
    color: ${({ theme }) => theme.colors.white};
    padding: 10px;
    font-weight: 500;
    display: block;
    transition: color 0.4s;
  }

  a:hover {
    color: ${({ theme }) => theme.colors.white};
    opacity: 0.8;
    text-decoration: underline;
    text-underline-offset: 3px;
    text-decoration-thickness: 3px;
  }

  @media (max-width: 897px) {
    font-size: ${({ theme }) => theme.fontSize.fs20};
  }
`;

export const ContainerInput = styled.div`
  width: 27rem;
  position: relative;
  @media (max-width: 897px) {
    display: none;
  }
`;

export const InputStyled = styled.input`
  width: 100%;
  padding: 12px 0 12px 20px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.white};
  outline: none;
  border: 3px solid ${({ theme }) => theme.colors.white};
  border-radius: 5px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const IconSearch = styled.img`
  position: absolute;
  top: 12px;
  right: 30px;
`;

export const MenuIcon = styled.img`
  display: none;
  cursor: pointer;

  @media (max-width: 897px) {
    display: block;
  }
`;

export const ContainerNav = styled.nav`
  width: 100vw;
  height: ${({ open }) => (open ? "calc(100vh - 7rem)" : "0px")};
  position: fixed;
  top: 7rem;
  left: 0;
  transition: height 0.4s;
  z-index: 2;
`;

export const ListMobile = styled.ul`
  display: ${({ open }) => (open ? "flex" : "none")};
  transition: color 0.4s;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  background-color: ${({ theme }) => theme.colors.redSecundary};
`;

export const ListItemMobile = styled.li`
  a {
    color: ${({ theme }) => theme.colors.white};
    padding: 10px;
    font-weight: 500;
    transition: color 0.4s;
  }

  .selected {
    text-decoration: underline;
    text-underline-offset: 3px;
    text-decoration-thickness: 3px;
  }

  a:hover {
    color: ${({ theme }) => theme.colors.blackSecundary};
  }

  @media (max-width: 897px) {
    font-size: ${({ theme }) => theme.fontSize.fs20};
  }
`;
