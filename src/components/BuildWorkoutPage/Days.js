 import React, {useContext} from 'react';
import { List,ListItem, ListItemText, Typography, Divider,Grid,IconButton} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import {BuildWorkoutContext} from '../../contexts/Provider'

 const Days = () => {
    const {state,updateSelectedRoutine,removeRoutine} = useContext(BuildWorkoutContext);

    const handleClick = (e) => {   
        updateSelectedRoutine(e.currentTarget.className);
    }
    const handleRemove = (id) => {   
        console.log(id)
        removeRoutine(id)
    }

    return(
            <React.Fragment>
                <List className="day1">
                    <span className="day1" onClick = {handleClick}><Typography variant="body2" color="textSecondary">DAY 1</Typography></span>
                    {(state.days1).map(exercise =>
                        <Grid>
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
                                    {state.days1.type}
                                    </Typography>
                                    - {exercise.idealSets} Set x {exercise.idealReps} Reps | {exercise.restTime}s Rest
                                </React.Fragment>
                                }
                            />
                            <IconButton size="small" onClick = {() => handleRemove(exercise.id)}> <DeleteIcon/></IconButton>
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        </Grid>
                    )}
                </List>


                <List className="day2">
                    <span className="day2" onClick = {handleClick}><Typography variant="body2" color="textSecondary">DAY 2</Typography></span>
                    {(state.days2).map(exercise =>
                        <Grid>
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
                        </Grid>
                    )}
                </List>

                <List className="day3">
                    <span className="day3" onClick = {handleClick}><Typography variant="body2" color="textSecondary">DAY 3</Typography></span>
                    {(state.days3).map(exercise =>
                        <Grid>
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
                                    {state.days3.type}
                                    </Typography>
                                    - {exercise.idealSets} Set x {exercise.idealReps} Reps | {exercise.restTime}s Rest
                                </React.Fragment>
                                }
                            />
                            <IconButton size="small" onClick = {() => handleRemove(exercise.id)}> <DeleteIcon/></IconButton>
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        </Grid>
                    )}
                </List>

              
            </React.Fragment>
            

         );
    
 }

 export default Days
// /*
//     <React.Fragment>
    
//             <List className="day1">
//             <span className="day1" onClick = {this.handleClick}><Typography variant="body2" color="textSecondary">DAY 1</Typography></span>
//             {Object.keys(this.props.day1s).map(key =>
//                 <Grid>
//                 <ListItem alignItems="flex-start">
//                     <ListItemText
//                         primary={this.props.day1s[key].exerciseName}
//                         secondary={
//                         <React.Fragment>
//                             <Typography
//                             component="span"
//                             variant="body2"
//                             color="textPrimary"
//                             >
//                             {this.props.day1s[key].type}
//                             </Typography>
//                             - {this.props.day1s[key].idealSets} Set x {this.props.day1s[key].idealReps} Reps | {this.props.day1s[key].restTime}s Rest
//                         </React.Fragment>
//                         }
//                     />
//                 </ListItem>
//                 <Divider variant="inset" component="li" />
//                 </Grid>
//             )}
//           </List>


//           <List onClick = {this.handleClick}>
//           <span className="day2" onClick = {this.handleClick}><Typography variant="body2" color="textSecondary">DAY 2</Typography></span>
//           {Object.keys(this.props.day2s).map(key =>
//                 <Grid>
//                 <ListItem alignItems="flex-start">
//                     <ListItemText
//                         primary={this.props.day2s[key].exerciseName}
//                         secondary={
//                         <React.Fragment>
//                             <Typography
//                             component="span"
//                             variant="body2"
//                             color="textPrimary"
//                             >
//                             {this.props.day2s[key].type}
//                             </Typography>
//                             - {this.props.day2s[key].idealSets} Set x {this.props.day2s[key].idealReps} Reps | {this.props.day2s[key].restTime}s Rest
//                         </React.Fragment>
//                         }
//                     />
//                 </ListItem>
//                 <Divider variant="inset" component="li" />
//                 </Grid>
//             )}
//           </List>


//           <List onClick = {this.handleClick}>
//           <span className="day3" onClick = {this.handleClick}><Typography variant="body2" color="textSecondary">DAY 3</Typography></span>
//             {Object.keys(this.props.day3s).map(key =>
//                 <Grid>
//                 <ListItem alignItems="flex-start">
//                     <ListItemText
//                         primary={this.props.day3s[key].exerciseName}
//                         secondary={
//                         <React.Fragment>
//                             <Typography
//                             component="span"
//                             variant="body2"
//                             color="textPrimary"
//                             >
//                             {this.props.day3s[key].type}
//                             </Typography>
//                             - {this.props.day3s[key].idealSets} Set x {this.props.day3s[key].idealReps} Reps | {this.props.day3s[key].restTime}s Rest
//                         </React.Fragment>
//                         }
//                     />
//                 </ListItem>
//                 <Divider variant="inset" component="li" />
//                 </Grid>
//             )}
//           </List>














//           </React.Fragment>

// */