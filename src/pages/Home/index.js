import React from "react";

/* Components  */
import { BigCard } from "../../components";
import { Agents } from "../../components";
import { GameModes } from "../../components";
import { Maps } from "../../components";

const Home = () => {
  return (
    <>
      <BigCard />
      <Agents />
      <GameModes />
      <Maps />
    </>
  );
};

export default Home;
