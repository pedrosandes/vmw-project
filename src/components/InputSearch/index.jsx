import * as S from "./styles"

/* Assets  */
import SearchIcon from "../../assets/svg/search-icon-agentes.svg"

const InputSearch = ({...props}) => {
  return (
      <S.SearchContainer>
        <S.InputSearch {...props} type="text" placeholder="Pesquisar por agente" />
        <S.Icon src={SearchIcon} alt="Icone de pesquisa" />
      </S.SearchContainer>
  )
}

export default InputSearch