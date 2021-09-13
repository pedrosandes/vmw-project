import * as S from "./styles";
import { NavLink } from "react-router-dom";
import Routes from "./LinkRoutes";

const Nav = () => {
  return (
    <S.List>
      {Routes.map(({ id, name, path }) => (
        <S.ListItem key={id}>
          <NavLink exact to={path} activeClassName="selected">
            {name}
          </NavLink>
        </S.ListItem>
      ))}
    </S.List>
  );
};

export { Nav };
