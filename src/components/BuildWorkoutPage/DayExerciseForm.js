import React from 'react';

class DayExerciseForm extends React.Component{
    //get inputs
    exerciseNameRef = React.createRef(); 
    idealSetsRef = React.createRef();
    idealRepsRef = React.createRef();
    restTimeRef = React.createRef();
    optionYoutubeUrlRef = React.createRef();
    typeRef = React.createRef();

    //create object
    createExercise = event => {
        event.preventDefault();
        const exercise = {
            exerciseName:this.exerciseNameRef.current.value,
            idealSets:this.idealSetsRef.current.value,
            idealRepsRef: this.idealRepsRef.current.value,
            restTime: this.restTimeRef.current.value,
            optionYoutubeUrl: this.optionYoutubeUrlRef.current.value,
            type: this.typeRef.current.value
        };
        console.log(this.exerciseNameRef.current.value)
        this.props.addExercise(exercise);
        event.currentTarget.reset();

    };

    render(){
        return(
            <form onSubmit={this.createExercise}>
                <input name="exerciseName" ref={this.exerciseNameRef}placeholder="Exercise Name"/>
                <input name="idealSets" ref={this.idealSetsRef}placeholder="Ideals Sets"/>
                <input name="idealReps" ref={this.idealRepsRef}placeholder="Ideal Reps"/>
                <input name="restTime" ref={this.restTimeRef}placeholder="Rest Time"/>
                <input name="optionYoutubeUrl" ref={this.optionYoutubeUrlRef}placeholder="Optional Youtube Video"/>
                <select name="type" ref={this.typeRef}>
                    <option>Upper Body</option>
                    <option>Lower Body</option>
                    <option>Other</option>
                </select>
                <button type="submit">Add Exercise</button>

            </form>
        )
    }
}
export default DayExerciseForm;