import * as S from "./styles";
import { NavLink } from "react-router-dom";

/* Arquivo de rotas*/
import Routes from "./LinkRoutes";

const Nav = () => {
  return (
    <S.List>
      {Routes.map(({ id, name, path }) => (
        <S.ListItem key={id}>
          <NavLink exact to={path} activeClassName="selected" rel="author">
            {name}
          </NavLink>
        </S.ListItem>
      ))}
    </S.List>
  );
};

export default Nav;
