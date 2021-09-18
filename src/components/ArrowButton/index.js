import { consts } from "react-elastic-carousel";
import * as S from "./styles";

/* Assets */
import ArrowLeftImg from "../../assets/svg/arrow-left.svg";
import ArrowRightImg from "../../assets/svg/arrow-right.svg";

const ArrowLeft = () => {
  return <img src={ArrowLeftImg} alt="Arrow left" />;
};
const ArrowRight = () => {
  return <img src={ArrowRightImg} alt="Arrow left" />;
};

function ArrowButton({ type, onClick, isEdge }) {
  const pointer = type === consts.PREV ? <ArrowLeft /> : <ArrowRight />;
  return (
    <S.Container>
      <S.ButtonArrowStyled onClick={onClick} disabled={isEdge}>
        {pointer}
      </S.ButtonArrowStyled>
    </S.Container>
  );
}

export default ArrowButton;
