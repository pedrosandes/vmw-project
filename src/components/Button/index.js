import * as S from "./styles";
import { useHistory } from "react-router";

const Button = ({ color, children, to = "/" }) => {
  const history = useHistory();

  function handleButtonRoute() {
    history.push(to);
  }
  return (
    <S.ButtonStyled
      fontColor={color || "#fa4454"}
      borderColor={color || "#fa4454"}
      onClick={handleButtonRoute}
      rel="author"
    >
      {children}
    </S.ButtonStyled>
  );
};

export default Button;
