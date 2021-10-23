import * as S from "./styles";

/* Components */
import { SectionTitle } from "../";

const MapsSkeleton = () => {
  const maps = new Array(6).fill(null);
  return (
    <S.MapsContainer>
      <SectionTitle color="#333">Mapas</SectionTitle>
      <S.MapsList>
        {maps.map((_, id) => (
          <S.MapsItemSkeleton key={id}>
            <S.ShimmerWrapper>
              <S.Shimmer />
            </S.ShimmerWrapper>
          </S.MapsItemSkeleton>
        ))}
      </S.MapsList>
      <S.ButtonWrapper>
        <S.Button>
          <S.ShimmerWrapper>
            <S.Shimmer />
          </S.ShimmerWrapper>
        </S.Button>
      </S.ButtonWrapper>
    </S.MapsContainer>
  );
};

export default MapsSkeleton;
