import * as S from "./styles";
import { Link } from "react-router-dom";
import Routes from "./LinkRoutes";

const Nav = () => {
  return (
    <S.List>
      {Routes.map(({ id, name, path }) => (
        <S.ListItem key={id}>
          <Link to={path}>{name}</Link>
        </S.ListItem>
      ))}
    </S.List>
  );
};

export { Nav };
