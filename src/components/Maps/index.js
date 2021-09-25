import { useState, useEffect } from "react";

import * as S from "./styles";

/* Components  */
import SectionTitle from "../SectionTitle";
import Button from "../Button";

/* Services  */
import { getAllMaps } from "../../services/api";

const Maps = () => {
  const [maps, setMaps] = useState([]);

  useEffect(() => {
    (async () => {
      const mapsResponse = await getAllMaps();
      const { data } = mapsResponse;
      setMaps(data);
    })();
  }, []);

  return (
    <S.MapsContainer>
      <SectionTitle color="#333">Mapas</SectionTitle>
      <S.MapsList>
        {maps.slice(0, 6).map(({ id, name, image }) => {
          return (
            <S.MapsItem key={id}>
              <S.MapImage src={image} title={name} />
              <S.MapName>{name}</S.MapName>
            </S.MapsItem>
          );
        })}
      </S.MapsList>
      <S.ButtonWrapper>
        <Button to="/mapas">Ver todos os mapas</Button>
      </S.ButtonWrapper>
    </S.MapsContainer>
  );
};

export default Maps;
