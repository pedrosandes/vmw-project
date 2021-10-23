import { useState } from "react";
import * as S from "./styles";
import { NavLink } from "react-router-dom";
/* Arquivos de rotas */
import Routes from "./LinkRoutes";

/* Assets  */
import Logo from "assets/svg/logo.svg";
import MenuOpenIcon from "assets/svg/menu-open-icon.svg";
import MenuCloseIcon from "assets/svg/menu-close-icon.svg";

/* Components  */
import Nav from "./nav.jsx";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  function ToggleMenu() {
    return setIsOpen(!isOpen);
  };

  function CloseLinkOnClick() {
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
