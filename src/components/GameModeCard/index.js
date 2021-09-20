import * as S from "./styles";

const GameModeCard = ({ icon, name }) => {
  return (
    <S.Container>
      <S.Image src={icon} />
      <S.Text>{name}</S.Text>
    </S.Container>
  );
};

export default GameModeCard;
