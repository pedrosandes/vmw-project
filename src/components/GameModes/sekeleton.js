import * as S from "./styles";

/* Assets  */
import TextBackground from "assets/img/text-background.svg";

/* Components  */
import SectionTitle from "../SectionTitle";

const GameModesSkeleton = () => {
  const gameModes = new Array(5).fill(null);
  return (
    <S.Container backgroundImage={TextBackground}>
      <S.Wrapper>
        <SectionTitle>Modos de jogo</SectionTitle>
        <S.ContainerModes>
          <S.Row>
            {gameModes.slice(0, 2).map((_, id) => {
              return (
                <S.GameModeCard key={id}>
                  <S.ShimmerWrapper>
                    <S.Shimmer />
                  </S.ShimmerWrapper>
                </S.GameModeCard>
              );
            })}
          </S.Row>
          <S.Row>
            {gameModes.slice(2, 4).map((_, id) => {
              return (
                <S.GameModeCard key={id}>
                  <S.ShimmerWrapper>
                    <S.Shimmer />
                  </S.ShimmerWrapper>
                </S.GameModeCard>
              );
            })}
          </S.Row>
          <S.WrapperButton>
            <S.Button>
              <S.ShimmerWrapper>
                <S.Shimmer />
              </S.ShimmerWrapper>
            </S.Button>
          </S.WrapperButton>
        </S.ContainerModes>
      </S.Wrapper>
    </S.Container>
  );
};

export default GameModesSkeleton;
