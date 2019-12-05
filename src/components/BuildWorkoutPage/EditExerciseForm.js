 import React, {useContext} from 'react'
import { TextField, CardActions, CardContent, Grid,Card, Typography, MenuItem, Select, InputLabel, FormControl,IconButton} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import {BuildWorkoutContext} from '../../contexts/Provider'


 const EditExerciseForm = ({eachExercise}) => {
    const {state,setState,removeExercise,updateExercise,addToDay} = useContext(BuildWorkoutContext);

    //handle edit
    const handleChange = (event) => {
        console.log(event.currentTarget.value)
        const newExercise = JSON.parse(JSON.stringify(eachExercise));
        const updatedExercise = {
            ...newExercise,
            [event.currentTarget.name]:event.currentTarget.value
        }
        //
        // const updatedExercise = {
        //     //every attribute of the exercise then the new one
        //     ...this.props.exercise,
        //     [event.currentTarget.name]:event.currentTarget.value
        // }

         updateExercise(eachExercise.id,updatedExercise);
    };
    //handle delete
    const handleRemove = () => {
        removeExercise(eachExercise.id);
        console.log(eachExercise.id);
        console.log("handleRemove")
    }
    const handleAdd = () =>{
       console.log("handleAdd")
       addToDay(eachExercise);
    }


         return(

            <Grid container >
                <Card >
                    <CardContent>
                    <TextField fullWidth name="exerciseName" label="Exercise Name" margin="normal" value={eachExercise.exerciseName} onChange={handleChange}/>
                    <TextField fullWidth name="idealSets" label="Ideal Sets" margin="normal" value={eachExercise.idealSets}  onChange={handleChange} />
                    <TextField fullWidth name="idealReps" label="Ideal Reps" margin="normal" value={eachExercise.idealReps}  onChange={handleChange}/>
                    <TextField fullWidth name="restTime" label="Rest Time" margin="normal" value={eachExercise.restTime} onChange={handleChange}/>
                    <TextField fullWidth name="optionYoutubeUrl" label="Youtube Video" value={eachExercise.optionYoutubeUrl} onChange={handleChange}/>

                    <FormControl fullWidth>
                    <InputLabel>Exercise Category</InputLabel>
                    <Select fullWidth name="type" value={eachExercise.type} >
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