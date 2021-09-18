import * as S from "./styles";

const AgentCard = ({ name, image }) => {
  return (
    <S.CardContainer>
      <S.CardName>{name}</S.CardName>
      <S.CardImage>
        <S.Image src={image} alt={`Imagem do agente`} />
      </S.CardImage>
    </S.CardContainer>
  );
};

export default AgentCard;
