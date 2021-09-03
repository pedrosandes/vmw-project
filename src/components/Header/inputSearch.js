import * as S from "./styles";
import IconSearch from "../../assets/img/svg/search-icon.svg";

const InputSearch = () => {
  return (
    <S.ContainerInput>
      <S.InputStyled type="text" placeholder="Pesquise um agente, mapa..." />
      <S.IconSearch src={IconSearch} alt="Icone de pesquisa" />
    </S.ContainerInput>
  );
};

export { InputSearch };
