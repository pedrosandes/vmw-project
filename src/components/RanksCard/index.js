import * as S from "./styles";

const RanksCard = ({ name, image }) => {
  return (
    <S.Container>
      <S.ImageContainer>
        <S.Image src={image} alt="Imagem do rank" />
      </S.ImageContainer>
      <S.RankName>{name}</S.RankName>
    </S.Container>
  );
};

export default RanksCard;
