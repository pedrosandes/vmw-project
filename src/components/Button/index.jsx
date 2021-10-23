import * as S from "./styles";
import { useHistory } from "react-router";

const Button = ({ color, children, to = "/" }) => {
  const history = useHistory();

  function handleButtonRoute(path) {
    history.push(path);
    window.scrollTo({
      top: 0,
    })
  }
  return (
    <S.ButtonStyled
      fontColor={color || "#fa4454"}
      borderColor={color || "#fa4454"}
      onClick={() => handleButtonRoute(to)}
      rel="author"
    >
      {children}
    </S.ButtonStyled>
  );
};

export default Button;
