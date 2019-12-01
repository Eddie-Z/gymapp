import React, {useContext} from 'react'
import { TextField, CardActions, CardContent, Grid,Card, Typography, MenuItem, Select, InputLabel, FormControl,IconButton} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import {BuildWorkoutContext} from '../contexts/Provider'


const EditExerciseForm = ({exercise}) => {
    const {addDayExercise,removeExercise} = useContext(BuildWorkoutContext);

    //handle edit
    const handleChange = (event) => {
        console.log(event.currentTarget.value)
        //
        // const updatedExercise = {
        //     //every attribute of the exercise then the new one
        //     ...this.props.exercise,
        //     [event.currentTarget.name]:event.currentTarget.value
        // }
        // this.props.updateExercise(this.props.index,updatedExercise);
    };
    //handle delete
    const handleRemove = () => {
        removeExercise(exercise.id);
    }
    const handleAdd = () =>{
       
        addDayExercise(exercise);
    }


        return(

            <Grid container >
                <Card >
                    <CardContent>
                    <TextField fullWidth name="exerciseName" label="Exercise Name" margin="normal" value={exercise.exerciseName} onChange={handleChange}/>
                    <TextField fullWidth name="idealSets" label="Ideal Sets" margin="normal" value={exercise.idealSets}  onChange={handleChange} />
                    <TextField fullWidth name="idealReps" label="Ideal Reps" margin="normal" value={exercise.idealReps}  onChange={handleChange}/>
                    <TextField fullWidth name="restTime" label="Rest Time" margin="normal" value={exercise.restTime} onChange={handleChange}/>
                    <TextField fullWidth name="optionYoutubeUrl" label="Youtube Video" value={exercise.optionYoutubeUrl} onChange={handleChange}/>

                    <FormControl fullWidth>
                    <InputLabel>Exercise Category</InputLabel>
                    <Select fullWidth name="type" value={exercise.type} >
                        <MenuItem value="Upper Body">Upper Body</MenuItem>
                        <MenuItem value="Lower Body">Lower Body</MenuItem>
                        <MenuItem value="Other">Other</MenuItem>
                    </Select>
                    </FormControl>

                    </CardContent>
                    <CardActions>
                        <IconButton size="small" onClick={handleRemove}> <DeleteIcon/><Typography>Remove Exercise</Typography></IconButton>
                        <IconButton size="small" onClick={handleAdd}><AddIcon /><Typography>Add To</Typography></IconButton>
                    </CardActions>

                </Card>
            </Grid>
        )

}

export default EditExerciseForm;