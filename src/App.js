import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import FrontPage from "./components/FrontPage/FrontPage";
import BuildWorkout from "./components/BuildWorkoutPage/Buildworkout";
import Workout from "./components/WorkoutPage/workout";


import  {BuildWorkoutContextProvider } from "./contexts/Provider";

const App = () => {
  return(
    <BuildWorkoutContextProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={FrontPage} />
          <Route path="/Buildworkout" component={BuildWorkout} />
          <Route path="/Workout" component={Workout} />
        </Switch>
      </BrowserRouter>
    </BuildWorkoutContextProvider>
  )
  }

export default App;