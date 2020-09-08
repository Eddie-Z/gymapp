import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import FrontPage from "./components/FrontPage/FrontPage";
import BuildWorkout from "./components/BuildWorkoutPage/BuildworkoutAPP";
import Header from './Header';
import Workout from "./components/WorkoutPage/workout";
import template from './template'


import  {BuildWorkoutContextProvider } from "./contexts/Provider";

const App = () => {
  return(
  
    <BuildWorkoutContextProvider>
       {/*<Header/>*/} 
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={FrontPage} />
          <Route path="/Buildworkout" component={BuildWorkout} />
          <Route path="/Workout" component={Workout} />
          <Route path="/test" component={template} />
        </Switch>
      </BrowserRouter>
    </BuildWorkoutContextProvider>
  )
  }

export default App;