import React, {useContext, useEffect} from 'react';
import EditExerciseForm from './EditExerciseForm'
import {ExpansionPanel,ExpansionPanelSummary,Typography,ExpansionPanelDetails,Grid} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {BuildWorkoutContext} from '../../contexts/Provider'

 const ExerciseList = () => {
    const {state} = useContext(BuildWorkoutContext);

        return (
            <Grid>
                    <ul>
                    <Grid>
                     
                        {state.exercise.map(eachExercise =>
                        <ExpansionPanel >
                           <ExpansionPanelSummary
                           expandIcon={<ExpandMoreIcon />}
                           aria-controls="panel1a-content"
                           id="panel1a-header"
                           >
                           <Typography> {eachExercise.exerciseName} </Typography>
                           </ExpansionPanelSummary>
                           
                           <ExpansionPanelDetails>
                           <Typography>
                               <EditExerciseForm eachExercise={eachExercise} key={eachExercise.key} />
                           </Typography>
                           </ExpansionPanelDetails>
                        </ExpansionPanel>
                        )}
                      </Grid>
                    </ul>
                
            </Grid>
        )
 }
 export default ExerciseList;



 /*
      <EditExerciseForm />
                                 */
