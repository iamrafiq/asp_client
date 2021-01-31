import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./screen/Home";
import Activity from "./screen/Activity";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/activity" exact component={Activity} />

      </Switch>
    </BrowserRouter>
  );
};

export default Routes;