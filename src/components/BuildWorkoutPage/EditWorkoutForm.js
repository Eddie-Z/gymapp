import React, {useContext,useState} from 'react';
import {BuildWorkoutContext} from '../../contexts/Provider'
import Grid from '@material-ui/core/Grid';
import { TextField, MenuItem ,Button, Select, InputLabel,FormControl} from '@material-ui/core';

const EditWorkoutForm = () => {
    const {addExercise} = useContext(BuildWorkoutContext);
    const [exerciseName,setExerciseName] = useState('');
    const [idealSets,setIdealSets] = useState('');
    const [idealReps,setIdealReps] = useState('');
    const [restTime,setRestTime] = useState('');
    const [optionYoutubeUrl,setOptionalYoutubeUrl] = useState('');
    const [muscleCategory, setMuscleCategory] = useState('');

    const {setEditToggle,editingExercise,addUpdateExercise} = useContext(BuildWorkoutContext);

    const createWorkout = (e) => {
        e.preventDefault();
      
        //context api
        addUpdateExercise(exerciseName,idealSets,idealReps,restTime,optionYoutubeUrl,muscleCategory);




    
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
                <TextField fullWidth name="exerciseName" label="Exercise Name" margin="normal" defaultValue={editingExercise.exerciseName} onChange={(e)=>setExerciseName(e.target.value) } required/>     
                <TextField fullWidth name="idealSets" label="Ideal Sets" margin="normal"  defaultValue={editingExercise.idealSets} onChange={(e)=>setIdealSets(e.target.value)} required/>
                <TextField fullWidth name="idealReps" label="Ideal Repetition" margin="normal" defaultValue={editingExercise.idealReps} onChange={(e)=>setIdealReps(e.target.value)} required/>
                <TextField fullWidth name="restTime" label="Rest Time" margin="normal"  defaultValue={editingExercise.restTime} onChange={(e)=>setRestTime(e.target.value)}/>
                <TextField fullWidth name ="muscleCategory" label="Muscle Category" margin="normal"  defaultValue={editingExercise.muscleCategory} onChange={ (e) => setMuscleCategory(e.target.value)} />
                <TextField fullWidth name="optionYoutubeUrl" label="Youtube Video" margin="normal" defaultValue={editingExercise.optionYoutubeUrl} onChange={ (e) => setOptionalYoutubeUrl(e.target.value)}/>
                <Button fullWidth type="submit">Apply Edit</Button>
                <Button fullWidth onClick= {()=>setEditToggle(true)}>Cancel Edit</Button>
            </form>
        )
}
export default EditWorkoutForm;