import React, {useContext} from 'react';
import EditExerciseForm from './EditExerciseForm'
import {ExpansionPanel,ExpansionPanelSummary,Typography,ExpansionPanelDetails,Grid} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {BuildWorkoutContext} from '../contexts/Provider'

const ExerciseList = () => {
    const {exercises} = useContext(BuildWorkoutContext);
    //console.log(exercises)
        return exercises.length ?(
            <Grid>
                    <ul>
                    {
                        (exercises).map( exercise => 
                           
                            <ExpansionPanel >
                                <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                <Typography>{exercise.exerciseName}</Typography>
                                </ExpansionPanelSummary>
                                
                                <ExpansionPanelDetails>
                                <Typography>
                                  <EditExerciseForm exercise={exercise} key={exercise.id}/>
                                </Typography>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                       
                        )
                    }
                    </ul>
                
            </Grid>
        ) : <Typography>Add Some Exercises</Typography>
}
export default ExerciseList;

/*
       <Grid>
                <ul>
                
               {Object.keys(this.props.exercises).map(key =>


                <ExpansionPanel >
                    <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography> {this.props.exercises[key].exerciseName} </Typography>
                    </ExpansionPanelSummary>
                    
                    <ExpansionPanelDetails>
                    <Typography>
                        <EditExerciseForm 
                            key={key}
                            index={key}
                            exercise={this.props.exercises[key]}
                            updateExercise ={this.props.updateExercise}
                            deleteExercise = {this.props.deleteExercise}
                            addDayExercise = {this.props.addDayExercise}
                        />
                       
                    </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
               )}
               </ul>
            </Grid>
*/