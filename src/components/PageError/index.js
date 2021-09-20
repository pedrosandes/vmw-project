import * as S from "./styles";
import { useHistory } from "react-router";
/* Assets */
import ErrorImage from "../../assets/img/error-image.png";

const PageError = ({ errorTitle, errorText }) => {
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
