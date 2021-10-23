import * as S from "./styles";

/* Components */
import { SectionTitle }  from "../";

const AgentsSkeleton = () => {
  const cardsArr = new Array(4).fill(null);

  return (
    <S.Container>
      <SectionTitle color="#333">Agentes</SectionTitle>
      <S.ContainerAgents>
        <S.WrapperArrowButton>
          <S.ArrowButton>
            <S.ShimmerWrapper>
              <S.Shimmer />
            </S.ShimmerWrapper>
          </S.ArrowButton>
        </S.WrapperArrowButton>
        <S.ContainerCarousel>
          {cardsArr.map((_, id) => (
            <S.AgentCard key={id}>
              <S.ShimmerWrapper>
                <S.Shimmer />
              </S.ShimmerWrapper>
            </S.AgentCard>
          ))}
        </S.ContainerCarousel>
        <S.WrapperArrowButton>
          <S.ArrowButton>
            <S.ShimmerWrapper>
              <S.Shimmer />
            </S.ShimmerWrapper>
          </S.ArrowButton>
        </S.WrapperArrowButton>
      </S.ContainerAgents>
      <S.WrapperButton>
        <S.Button>
          <S.ShimmerWrapper>
            <S.Shimmer />
          </S.ShimmerWrapper>
        </S.Button>
      </S.WrapperButton>
    </S.Container>
  );
};

export default AgentsSkeleton;
