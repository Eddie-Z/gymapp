import React from 'react'


class EditExerciseForm extends React.Component{

    //handle edit
    handleChange = event => {
        console.log(event.currentTarget.value)
        //
        const updatedExercise = {
            //every attribute of the exercise then the new one
            ...this.props.exercise, 
            [event.currentTarget.name]:event.currentTarget.value
        }
        this.props.updateExercise(this.props.index,updatedExercise);
    };
    //handle delete
    handleDelete = () => {
        this.props.deleteExercise(this.props.index);
    }


    render(){
        return(
            <div>
            <input type="text" name="exerciseName" value={this.props.exercise.exerciseName} onChange={this.handleChange}/>
            <input type="text" name="idealSets" value={this.props.exercise.idealSets} onChange={this.handleChange}/>
            <input type="text" name="idealReps" value={this.props.exercise.idealRepsRef} onChange={this.handleChange}/>
            <input type="text" name="restTime" value={this.props.exercise.restTime} onChange={this.handleChange}/>
            <input type="text" name="youtubeURL" value={this.props.exercise.optionYoutubeUrl} onChange={this.handleChange}/>
            <input type="text" name="type" value={this.props.exercise.type} onChange={this.handleChange}/>
            <button onClick={this.handleDelete}>Remove Exercise</button>
            </div>
        )
    }
}


export default EditExerciseForm;