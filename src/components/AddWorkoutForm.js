import React from 'react';
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';
import { TextField, MenuItem ,Button, Select, InputLabel,FormControl} from '@material-ui/core';

class AddWorkoutForm extends React.Component{
     state = {
        exerciseName: '',
        idealSets: '',
        idealReps:'',
        restTime: '',
        optionYoutubeUrl: '', 
        type: ''
    };
    //create object
    createExercise = event => {
        event.preventDefault();
        this.props.addExercise(this.state);
        event.currentTarget.reset();

    };

    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
      };

    render(){
        return(
            <React.Fragment>
            <Grid>
            <form onSubmit={this.createExercise}>
       
                <TextField fullWidth name="exerciseName" label="Exercise Name" margin="normal" onChange={this.handleChange('exerciseName')}/>     
                <TextField fullWidth name="idealSets" label="Ideal Sets" margin="normal"  onChange={this.handleChange('idealSets')}/>
                <TextField fullWidth name="idealReps" label="Ideal Reps" margin="normal"  onChange={this.handleChange('idealReps')}/>
                <TextField fullWidth name="restTime" label="Rest Time" margin="normal"  onChange={this.handleChange('restTime')}/>
                <TextField fullWidth name="optionYoutubeUrl" label="Youtube Video" margin="normal" onChange={this.handleChange('optionYoutubeUrl')}/>

                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Exerise Category</InputLabel>
                    <Select  id="demo-simple-select" labelId="demo-simple-select-label" fullWidth name="type" onChange={this.handleChange('type')} >
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
}
export default AddWorkoutForm;