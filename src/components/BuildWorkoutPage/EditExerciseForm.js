 import React, {useContext} from 'react'
import { TextField, CardActions, CardContent, Grid,Card, Typography, MenuItem, Select, InputLabel, FormControl,IconButton} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import {BuildWorkoutContext} from '../../contexts/Provider'


 const EditExerciseForm = ({eachExercise}) => {
    const {state,setState,removeExercise,updateExercise,addToDay} = useContext(BuildWorkoutContext);
    const [exerciseName,setExerciseName] = React.useState(eachExercise.exerciseName)
    const [idealReps,setIdealReps] = React.useState(eachExercise.idealReps)
    const [idealSets,setIdealSets] = React.useState(eachExercise.idealSets)
    const [restTime,setRestTime] = React.useState(eachExercise.restTime)
    const [optionYoutubeUrl,setOptionYoutubeUrl] = React.useState(eachExercise.optionYoutubeUrl)

    //handle edit
    const handleEdit = (event) => {
        console.log(event.currentTarget.value)
        // const newExercise = JSON.parse(JSON.stringify(eachExercise));
        // const updatedExercise = {
        //     ...newExercise,
        //     [event.currentTarget.name]:event.currentTarget.value
        // }
        // //
        // // const updatedExercise = {
        // //     //every attribute of the exercise then the new one
        // //     ...this.props.exercise,
        // //     [event.currentTarget.name]:event.currentTarget.value
        // // }

        //  updateExercise(eachExercise.id,updatedExercise);
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
                    <TextField fullWidth name="exerciseName" label="Exercise Name" margin="normal" value={exerciseName} onChange={e => setExerciseName(e.target.value)}/>
                    <TextField fullWidth name="idealSets" label="Ideal Sets" margin="normal" value={idealSets}  onChange={e => setIdealSets(e.target.value)}/>
                    <TextField fullWidth name="idealReps" label="Ideal Reps" margin="normal" value={idealReps}  onChange={e => setIdealReps(e.target.value)}/>
                    <TextField fullWidth name="restTime" label="Rest Time" margin="normal" value={restTime} onChange={e => setRestTime(e.target.value)}/>
                    <TextField fullWidth name="optionYoutubeUrl" label="Youtube Video" value={optionYoutubeUrl} onChange={e => setOptionYoutubeUrl(e.target.value)}/>

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

 // <IconButton size="small" onClick={handleEdit}><AddIcon /><Typography>Save Edit</Typography></IconButton>