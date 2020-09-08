import React, {useContext,useState} from 'react';
import {BuildWorkoutContext} from '../../contexts/Provider'
//import Grid from '@material-ui/core/Grid';
import {ExpansionPanel,ExpansionPanelSummary,Typography,ExpansionPanelDetails,Grid, Button} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
//import { TextField, MenuItem ,Button, Select, InputLabel,FormControl} from '@material-ui/core';

const EditExerciseForm = (props) => {
    const {exercises,removeExercise,updateExercise,addToRoutine,editUrl,EditExercise} = useContext(BuildWorkoutContext);
    const exercise = exercises[props.index];
    const [exerciseName,setExerciseName] = useState(exercise.exerciseName);
    const [idealSets,setIdealSets] = useState(exercise.idealSets);
    const [idealReps,setIdealReps] = useState(exercise.idealReps);
    const [restTime,setRestTime] = useState(exercise.restTime);
    const [optionYoutubeUrl,setOptionalYoutubeUrl] = useState(exercise.optionYoutubeUrl);
    const [muscleCategory, setMuscleCategory] = useState(exercise.muscleCategory);




    const handleChange = event =>{
   
        //copy and update object
        const updatedExercise = {...exercise, [event.currentTarget.name]:event.currentTarget.value}
        updateExercise(props.index,updatedExercise);

        //update interface
        switch(event.currentTarget.name){
                         case "exerciseName":
                            setExerciseName(event.currentTarget.value);
                            break;
                         case "idealSets":
                            setIdealSets(event.currentTarget.value);
                             break;
                         case "idealReps":
                            setIdealReps(event.currentTarget.value)
                             break;
                             case "restTime":
                                setRestTime(event.currentTarget.value)
                            break;       
                            case "muscleCategory":
                                setMuscleCategory(event.currentTarget.value);
                            break;
                            case "optionYoutubeUrl":
                                setOptionalYoutubeUrl(event.currentTarget.value);
                            break;        
        }

    }

        return(     
            <div>
                 <ExpansionPanel >
                           <ExpansionPanelSummary
                           expandIcon={<ExpandMoreIcon />}
                           aria-controls="panel1a-content"
                           id="panel1a-header"
                           >
                             <div style={{width:'100%'}}>
                            <Typography> {muscleCategory} <br/> {exerciseName} {idealSets} sets x {idealReps} Reps | {restTime}s Rest </Typography>
                            </div>
                            <div>
                             
                            <Button fullWidth onClick={() => removeExercise(props.index)}>Remove From Exercise</Button> 
                            <Button fullWidth onClick={() => addToRoutine(props.index)}>Add to Routine</Button>
                           {/*<Button fullWidth onClick={() => EditExercise(props.index)}>Edit Routine</Button>*/} 
                            
                            
                            </div>
                           
       
                           </ExpansionPanelSummary>
                           
                           <ExpansionPanelDetails>
                            <iframe width="560" height="315" src={editUrl(optionYoutubeUrl)} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                           </ExpansionPanelDetails>
                        </ExpansionPanel>


                       

              {/*          <EditExerciseForm eachExercise={eachExercise} key={eachExercise.key} />
                 <TextField fullWidth name="exerciseName" label="Exercise Name" margin="normal" value={exerciseName} onChange={handleChange} required/>     
                <TextField fullWidth name="idealSets" label="Ideal Sets" margin="normal"  value={idealSets} onChange={handleChange} required/>
                <TextField fullWidth name="idealReps" label="Ideal Repetition" margin="normal" value={idealReps} onChange={handleChange} required/>
                <TextField fullWidth name="restTime" label="Rest Time" margin="normal"  value={restTime} onChange={handleChange}/>
                <TextField fullWidth name ="muscleCategory" label="Muscle Category" margin="normal"  value={muscleCategory} onChange={handleChange} />
                <TextField fullWidth name="optionYoutubeUrl" label="Youtube Video" margin="normal" value={optionYoutubeUrl} onChange={handleChange}/>
            */}
            </div>
        )
}
export default EditExerciseForm;