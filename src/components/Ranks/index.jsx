import * as S from "./styles";

/* Content */
import RanksContent from "./content";

/* Components */
import RanksCard from "../RanksCard/index";
import SectionTitle from "../SectionTitle/index";
import Button from "../Button/index";

const Ranks = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <SectionTitle>Ranques</SectionTitle>
        <S.ContainerRanks>
          <S.Row>
            {RanksContent.slice(0, 2).map(({ id, name, image }) => {
              return <RanksCard key={id} name={name} image={image} />;
            })}
          </S.Row>
          <S.Row>
            {RanksContent.slice(2, 4).map(({ id, name, image }) => {
              return <RanksCard key={id} name={name} image={image} />;
            })}
          </S.Row>
        </S.ContainerRanks>
        <S.ButtonWrapper>
          <Button to="/ranques" color="#FAFAFA">
            Ver todos os ranques
          </Button>
        </S.ButtonWrapper>
      </S.Wrapper>
    </S.Container>
  );
};

export default Ranks;
