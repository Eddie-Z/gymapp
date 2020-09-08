import React, {useContext,useState} from 'react';
import {BuildWorkoutContext} from '../../contexts/Provider'
import { List,ListItem, ListItemText, Typography, Divider,Grid,IconButton} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const RoutineExercise = (props) => {
    const {removeRoutineExercise} = useContext(BuildWorkoutContext);
    const exercise = props.routine[props.index];
        return(     
            <Grid>
                <ListItem alignItems="flex-start">
                            <ListItemText
                                primary={exercise.exerciseName  }
                                secondary={
                                <React.Fragment>
                                    <Typography
                                    component="span"
                                    variant="body2"
                                    color="textPrimary"
                                    >
                                      {exercise.muscleCategory} -
                                    </Typography>
                                      {exercise.idealSets} Set x {exercise.idealReps} Reps | {exercise.restTime}s Rest 
                                </React.Fragment>
                                }
                            />
                            <IconButton size="small" onClick = {() => removeRoutineExercise(props.index)}> <DeleteIcon/></IconButton>
                        </ListItem>
                        <Divider variant="inset" component="li" />




                 {/* <TextField fullWidth name="exerciseName" label="Exercise Name" margin="normal" value={exerciseName} onChange={handleChange} />     
                <TextField fullWidth name="idealSets" label="Ideal Sets" margin="normal"  value={idealSets} onChange={handleChange} />
                <TextField fullWidth name="idealReps" label="Ideal Repetition" margin="normal" value={idealReps} onChange={handleChange} />
                <TextField fullWidth name="restTime" label="Rest Time" margin="normal"  value={restTime} onChange={handleChange}/>
                <TextField fullWidth name ="muscleCategory" label="Muscle Category" margin="normal"  value={muscleCategory} onChange={handleChange} />
                <TextField fullWidth name="optionYoutubeUrl" label="Youtube Video" margin="normal" value={optionYoutubeUrl} onChange={handleChange}/> */}
           </Grid>
        )
}
export default RoutineExercise;


/*
<ListItem alignItems="flex-start">
                            <ListItemText
                                primary={exercise.exerciseName}
                                secondary={
                                <React.Fragment>
                                    <Typography
                                    component="span"
                                    variant="body2"
                                    color="textPrimary"
                                    >
                                    {state.days2.type}
                                    </Typography>
                                    - {exercise.idealSets} Set x {exercise.idealReps} Reps | {exercise.restTime}s Rest
                                </React.Fragment>
                                }
                            />
                            <IconButton size="small" onClick = {() => handleRemove(exercise.id)}> <DeleteIcon/></IconButton>
                        </ListItem>
                        <Divider variant="inset" component="li" />
*/