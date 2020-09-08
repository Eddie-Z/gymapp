import React, {useContext,useState} from 'react';
import {BuildWorkoutContext} from '../../contexts/Provider'
import Grid from '@material-ui/core/Grid';
import { TextField, MenuItem ,Button, Select, InputLabel,FormControl} from '@material-ui/core';

const AddWorkoutForm = () => {
    const {addExercise} = useContext(BuildWorkoutContext);
    const [exerciseName,setExerciseName] = useState('');
    const [idealSets,setIdealSets] = useState('');
    const [idealReps,setIdealReps] = useState('');
    const [restTime,setRestTime] = useState('');
    const [optionYoutubeUrl,setOptionalYoutubeUrl] = useState('');
    const [muscleCategory, setMuscleCategory] = useState('');

    const createWorkout = (e) => {
        e.preventDefault();
      
        //context api
        addExercise(exerciseName,idealSets,idealReps,restTime,optionYoutubeUrl,muscleCategory);
    
        //reset form event.currentarget.reset()
        setExerciseName('');
        setIdealSets('');
        setIdealReps('');
        setRestTime('');
        setOptionalYoutubeUrl('');
        setMuscleCategory('');
    }
        return(     
            <form onSubmit={createWorkout}>
                <TextField fullWidth name="exerciseName" label="Exercise Name" margin="normal" value={exerciseName} onChange={ (e) => setExerciseName(e.target.value)} required/>     
                <TextField fullWidth name="idealSets" label="Ideal Sets" margin="normal"  value={idealSets} onChange={(e)=>setIdealSets(e.target.value)} required/>
                <TextField fullWidth name="idealReps" label="Ideal Repetition" margin="normal" value={idealReps} onChange={(e)=>setIdealReps(e.target.value)} required/>
                <TextField fullWidth name="restTime" label="Rest Time" margin="normal"  value={restTime} onChange={(e)=>setRestTime(e.target.value)} required/>
                <TextField fullWidth name ="muscleCategory" label="Muscle Category" margin="normal"  value={muscleCategory} onChange={ (e) => setMuscleCategory(e.target.value)} required/>
                <TextField fullWidth name="optionYoutubeUrl" label="Youtube Video" margin="normal" value={optionYoutubeUrl} onChange={ (e) => setOptionalYoutubeUrl(e.target.value)}/>
                <Button fullWidth type="submit">Add To Exercise List</Button>
            </form>
        )
}
export default AddWorkoutForm;