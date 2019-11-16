import React from 'react'
import AddWorkoutForm from './AddWorkoutForm'
import ExerciseList from './ExerciseList'
import base from "../base";

class Buildworkout extends React.Component {
    state ={
        exercises:{}
    };

    addExercise = exercise =>{
        //take copy of exisiting exercises
        const exercises = {...this.state.exercises};
        //add new exercise
        exercises[`exercise${Date.now()}`] = exercise;
        //set state as new state
        this.setState({exercises:exercises});
        console.log(this.state.exercises);
    }
    updateExercise = (key,updatedExercise ) => {
        //copy of exercise
        const exercises = {...this.state.exercises};
        //update the state
        exercises[key] = updatedExercise;
        this.setState({exercises:exercises});
    };
    deleteExercise = (key) =>{
        const exercises = {...this.state.exercises};
        console.log(exercises[key])
        delete exercises[key]
        this.setState({exercises:exercises});
    };

    render(){
        return(
            <div>
                <h2>Add</h2>
                <AddWorkoutForm addExercise={this.addExercise}/>
                <h2>Exercise List(All Exercises)</h2>
                <ExerciseList exercises={this.state.exercises} updateExercise={this.updateExercise} deleteExercise={this.deleteExercise}/>
            </div>
        )
    }

}
export default Buildworkout
