import * as S from "./styles";
import { useHistory } from "react-router";
/* Assets */
import ErrorImage from "../../assets/img/error-image.png";

const title = "Página em desenvolvimento";
const text =
  "Oops! Parece que a Killjoy ainda não terminou de desenvolver essa página.";

const PageError = ({ errorTitle = title, errorText = text }) => {
  const { push } = useHistory();
  function pushFromAbout() {
    push("/");
  }

  return (
    <S.Container>
      <S.Wrapper>
        <S.ContainerText>
          <S.Title>{errorTitle}</S.Title>
          <S.Text>{errorText}</S.Text>
          <S.Button onClick={pushFromAbout}>Voltar para a Home</S.Button>
        </S.ContainerText>
        <S.Image src={ErrorImage} alt="Imagem do Yoru, Viper e Sage" />
      </S.Wrapper>
    </S.Container>
  );
};

export default PageError;
