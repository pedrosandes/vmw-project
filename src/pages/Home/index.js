import React from "react";

/* Components  */
import {
  BigCard,
  Agents,
  GameModes,
  Maps,
  Ranks,
  Footer,
} from "../../components";

const Home = () => {
  return (
    <>
      <BigCard />
      <Agents />
      <GameModes />
      <Maps />
      <Ranks />
      <Footer />
    </>
  );
};

export default Home;
