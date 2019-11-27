import React from 'react'
import { TextField, CardActions ,Button, CardContent, Grid,Card, Typography, MenuItem, Select, InputLabel, FormControl,IconButton} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';

const style = {
    card: {
        minWidth: 400,
        margin:10,
        padding: '30px'
      },
    grid:{
        padding:20
    }
  };

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
    handleAdd = () =>{
        this.props.addDayExercise(this.props.index);
    }

      //<TextField type="text" variant="filled" name="type" value={this.props.exercise.type} onChange={this.handleChange}/>

    render(){
        return(
            
            <Grid container >
                <Card >
                    <CardContent>
                    <TextField fullWidth name="exerciseName" label="Exercise Name" margin="normal" value={this.props.exercise.exerciseName} onChange={this.handleChange}/>
                    <TextField fullWidth name="idealSets" label="Ideal Sets" margin="normal" value={this.props.exercise.idealSets} onChange={this.handleChange}/>
                    <TextField fullWidth name="idealReps" label="Ideal Reps" margin="normal" value={this.props.exercise.idealReps} onChange={this.handleChange}/>
                    <TextField fullWidth name="restTime" label="Rest Time" margin="normal" value={this.props.exercise.restTime} onChange={this.handleChange}/>
                    <TextField fullWidth name="optionYoutubeUrl" label="Youtube Video" value={this.props.exercise.optionYoutubeUrl} onChange={this.handleChange}/>

                    <FormControl fullWidth>
                    <InputLabel>Exercise Category</InputLabel>
                    <Select fullWidth name="type" value={this.props.exercise.type} onChange={this.handleChange} >
                        <MenuItem value="Upper Body">Upper Body</MenuItem>
                        <MenuItem value="Lower Body">Lower Body</MenuItem>
                        <MenuItem value="Other">Other</MenuItem>
                    </Select>
                    </FormControl>

                    </CardContent>
                    <CardActions>
                        <IconButton size="small" onClick={this.handleDelete}> <DeleteIcon/><Typography>Remove Exercise</Typography></IconButton>
                        <IconButton size="small" onClick={this.handleAdd}><AddIcon /><Typography>Add To</Typography></IconButton>
                    </CardActions>

                </Card>
            </Grid>
        )
    }
}


export default EditExerciseForm;