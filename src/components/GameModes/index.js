import { useEffect, useState } from "react";
import * as S from "./styles";

/* Assets  */
import TextBackground from "../../assets/img/text-background.svg";

/* Services */
import { getGameModes } from "../../services/api";

/* Components  */
import GameModeCard from "../GameModeCard";
import SectionTitle from "../SectionTitle";
import Button from "../Button";
import GameModesSkeleton from "./sekeleton";

const GameModes = () => {
  const [gameModes, setGameModes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      const { data } = await getGameModes();
      setGameModes(data);
      setTimeout(() => {
        setLoading(true);
      }, 1000);
    })();
  }, []);

  if (!loading) {
    return <GameModesSkeleton />;
  }

  return (
    <S.Container backgroundImage={TextBackground}>
      <S.Wrapper>
        <SectionTitle>Modos de jogo</SectionTitle>
        <S.ContainerModes>
          <S.Row>
            {gameModes.slice(0, 2).map(({ name, image, id }) => {
              return <GameModeCard key={id} name={name} icon={image} />;
            })}
          </S.Row>
          <S.Row>
            {gameModes.slice(2, 4).map(({ name, image, id }) => {
              return <GameModeCard key={id} name={name} icon={image} />;
            })}
          </S.Row>
          <Button color="#FAFAFA" to="/modosdejogo">
            Ver todos os modos
          </Button>
        </S.ContainerModes>
      </S.Wrapper>
    </S.Container>
  );
};

export default GameModes;
