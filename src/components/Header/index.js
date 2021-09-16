import { useState } from "react";
import * as S from "./styles";
import { NavLink } from "react-router-dom";
/* Arquivos de rotas */
import Routes from "./LinkRoutes";

/* Assets  */
import Logo from "../../assets/img/svg/logo.svg";
import MenuOpenIcon from "../../assets/img/svg/menu-open-icon.svg";
import MenuCloseIcon from "../../assets/img/svg/menu-close-icon.svg";

/* Components  */
import Nav from "./nav";
import InputSearch from "./inputSearch";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const ToggleMenu = () => {
    return setIsOpen(!isOpen);
  };

  const CloseLinkOnClick = () => {
    return setIsOpen(false);
  };

  window.addEventListener("resize", function () {
    if (window.innerWidth > 897 && isOpen) {
      setIsOpen(false);
    }
  });

  return (
    <>
      <S.ContainerWrapper open={isOpen}>
        <S.ContainerContent>
          <NavLink to="/">
            <S.Logo src={Logo} alt="Logo do Valorant Media Wiki" />
          </NavLink>
          <S.MenuIcon
            onClick={ToggleMenu}
            src={isOpen ? MenuCloseIcon : MenuOpenIcon}
            alt="Icone do menu"
          />
          <S.ContainerLeft open={isOpen}>
            <Nav />
            <InputSearch />
          </S.ContainerLeft>
        </S.ContainerContent>
      </S.ContainerWrapper>

      <S.ContainerNav open={isOpen}>
        <S.ListMobile open={isOpen}>
          {Routes.map(({ id, name, path }) => (
            <S.ListItemMobile key={id}>
              <NavLink
                exact
                to={path}
                activeClassName="selected"
                onClick={CloseLinkOnClick}
              >
                {name}
              </NavLink>
            </S.ListItemMobile>
          ))}
        </S.ListMobile>
      </S.ContainerNav>
    </>
  );
};

export default Header;
