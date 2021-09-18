import * as S from "./styles";

const SectionTitle = ({ children, color }) => {
  return (
    <S.TitleStyled fontColor={color || "#FAFAFA"}>{children}</S.TitleStyled>
  );
};

export default SectionTitle;
