import * as S from "./styles";
import { useHistory } from "react-router";
/* Assets */
import BigCardImage from "assets/img/cardzao-image.png";

const BigCard = () => {
  const { push } = useHistory();
  function pushFromAbout() {
    push("/sobre");
  }

  return (
    <S.Container>
      <S.Wrapper>
        <S.ContainerText>
          <S.Title>Valorant: o jogo competitivo 5x5</S.Title>
          <S.Text>
            Um FPS tático 5x5 com personagens marcantes, mecânica de tiro
            precisa e habilidades únicas!{" "}
          </S.Text>
          <S.Button onClick={pushFromAbout}>Saiba mais</S.Button>
        </S.ContainerText>
        <S.Image src={BigCardImage} alt="Imagem do Yoru, Viper e Sage" />
      </S.Wrapper>
    </S.Container>
  );
};

export default BigCard;
