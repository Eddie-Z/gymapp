import React from 'react';
import EditExerciseForm from './EditExerciseForm'

class ExerciseList extends React.Component{
    render(){
        return(
            <div>
               {Object.keys(this.props.exercises).map(key =>
               <EditExerciseForm 
                    key={key}
                    index={key}
                    exercise={this.props.exercises[key]}
                    updateExercise ={this.props.updateExercise}
                    deleteExercise = {this.props.deleteExercise}
                    addDayExercise = {this.props.addDayExercise}
                />
               )}
            </div>
        );
    }
}
export default ExerciseList;