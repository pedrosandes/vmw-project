import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./pages";
import { Header } from "./components";

export default function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/sobre" component={Home} />
        <Route path="/agentes/:id" component={Home} />
        <Route path="/modosdejogo" component={Home} />
        <Route path="/mapa/:id" component={Home} />
        <Route path="/ranques" component={Home} />
        <Route path="*" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
