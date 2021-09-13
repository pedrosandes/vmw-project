import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home, Agentes, Mapas, Ranques, Modos } from "./pages";
import { Header } from "./components";

export default function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/sobre" component={Home} />
        <Route path="/agentes/" component={Agentes} />
        <Route path="/agentes/:id" component={Agentes} />
        <Route path="/modosdejogo" component={Modos} />
        <Route path="/mapas/" component={Mapas} />
        <Route path="/mapas/:id" component={Home} />
        <Route path="/ranques" component={Ranques} />
        <Route path="*" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
