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
    const [exerciseCategory, setExerciseCategory] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addExercise(exerciseName,idealSets,idealReps,restTime,optionYoutubeUrl,exerciseCategory);
        setExerciseName('');
        setIdealSets('');
        setIdealReps('');
        setRestTime('');
        setOptionalYoutubeUrl('');
        setExerciseCategory('');
    }
        return(
            <React.Fragment>
            <Grid>
            <form onSubmit={handleSubmit}>
       
                <TextField fullWidth name="exerciseName" label="Exercise Name" margin="normal" value={exerciseName} onChange={ (e) => setExerciseName(e.target.value)} required/>     
                <TextField fullWidth name="idealSets" label="Ideal Sets" margin="normal"  value={idealSets} onChange={(e)=>setIdealSets(e.target.value)} required/>
                <TextField fullWidth name="idealReps" label="Ideal Reps" margin="normal" value={idealReps} onChange={(e)=>setIdealReps(e.target.value)} required/>
                <TextField fullWidth name="restTime" label="Rest Time" margin="normal"  value={restTime} onChange={(e)=>setRestTime(e.target.value)} required/>
                <TextField fullWidth name="optionYoutubeUrl" label="Youtube Video" margin="normal" value={optionYoutubeUrl} onChange={ (e) => setOptionalYoutubeUrl(e.target.value)}/>

                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Exercise Category</InputLabel>
                    <Select  id="demo-simple-select" labelId="demo-simple-select-label" fullWidth name="type" value={exerciseCategory} onChange={ (e) => setExerciseCategory(e.target.value)} required>
                        <MenuItem value="Upper Body">Upper Body</MenuItem>
                        <MenuItem value="Lower Body">Lower Body</MenuItem>
                        <MenuItem value="Other">Other</MenuItem>
                    </Select>
                </FormControl>

                <Button fullWidth type="submit">Add Exercise</Button>

            </form>
            </Grid>
            </React.Fragment>
        )
}
export default AddWorkoutForm;