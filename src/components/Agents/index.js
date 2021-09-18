import { useState, useEffect } from "react";
import Carousel from "react-elastic-carousel";
import * as S from "./styles";

/* Services */
import { getAllAgents } from "../../services/api";

/* Components  */
import AgentCard from "../AgentCard";
import SectionTitle from "../SectionTitle";
import Button from "../Button";
import ArrowButton from "../ArrowButton";

const Agents = () => {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    (async () => {
      const agentsResponse = await getAllAgents();
      const { data } = agentsResponse;
      setAgents(data);
    })();
  }, []);

  const breakPoint = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ];

  return (
    <S.Container>
      <SectionTitle color="#333">Agentes</SectionTitle>
      <S.ContainerAgents>
        <Carousel
          breakPoints={breakPoint}
          pagination={false}
          itemsToScroll={1}
          itemsToShow={4}
          renderArrow={ArrowButton}
        >
          {agents.map(({ name, image }) => (
            <AgentCard name={name} image={image} />
          ))}
        </Carousel>
      </S.ContainerAgents>
      <S.WrapperButton>
        <Button to="/agentes">Ver todos os agentes</Button>
      </S.WrapperButton>
    </S.Container>
  );
};

export default Agents;
