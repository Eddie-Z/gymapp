import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import BuildWorkout from "./Buildworkout";
import Workout from "./Buildworkout";


const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/Buildworkout" component={BuildWorkout} />
      <Route path="/Workout" component={Workout} />
    </Switch>
  </BrowserRouter>
);

export default Router;