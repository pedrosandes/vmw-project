import * as S from "./styles";
import { useHistory } from "react-router";

const Button = ({ color, children, to = "/" }) => {
  const history = useHistory();

  function handleButtonRoute() {
    console.log("Cliquei");
    history.push(to);
  }
  return (
    <S.ButtonStyled
      fontColor={color || "#fa4454"}
      borderColor={color || "#fa4454"}
      onClick={handleButtonRoute}
    >
      {children}
    </S.ButtonStyled>
  );
};

export default Button;
