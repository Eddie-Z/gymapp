import React, {useContext,useEffect, Fragment,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import YouTubeIcon from '@material-ui/icons/YouTube';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Button,TextField} from '@material-ui/core';
import {BuildWorkoutContext} from '../../contexts/Provider'
import { List,ListItem, ListItemText, Typography, Divider,Grid,IconButton,Paper} from '@material-ui/core';



const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 1400,
    padding:30,
    margin:'auto'

  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

 const GymSession = (props) => {
   const classes = useStyles();


    const {exerciseIndex,setExerciseIndex} = useContext(BuildWorkoutContext);

   //index of each exercise
   //const [exerciseIndex,setExerciseIndex] = useState(1);
   //set State
   const [setCount, setSetCount] = useState(1);

   //Which set 
   const [whichSet, setWhichSet] = useState(["","First Set", "Second set","Third Set", "Fourth Set","Fifth Set","Sixth Set","Seventh Set","Eighth Set", "Nineth Set","Tenth Set"])

   //How many reps completed
   const [repsCompleted,setRepsCompleted] = useState(0);

     //time
    const [seconds, setSeconds] = useState(0);
     const [isActive, setIsActive] = useState(false);

     //video expand
    const [expandedVideo, setExpandedVideo] = useState(false);

    const exercise = props.routine;

    const features = (action) =>{
        switch(action){

            //exercise Index
            case 'NEXT_WORKOUT':
                setExerciseIndex(exerciseIndex+1);
                break;
            case 'PREV_WORKOUT':
                if(exerciseIndex!==-1){
                    setExerciseIndex(exerciseIndex-1);   
                }
                break;
            //timer
            case 'TIME_TOGGLE':
                setIsActive(!isActive);
            break;
            case 'TIME_RESET':
                setSeconds(0);
                setIsActive(false);
            break;
            //video
              case 'EXPAND_VIDEO':
                setExpandedVideo(!expandedVideo);
                break;
              case 'NEXT_SET':
                   setSetCount(setCount+1)
                    //call time reset
                    setSeconds(0);
                    setIsActive(false);
                    //reset
                    if(setCount==exercise.idealSets){
                        console.log("hey")
                       // setCardState(cardState+1) 
                        setExerciseIndex(exerciseIndex+1);
                         setSetCount(1);
                        //store data
                    }
                    setRepsCompleted(0);
                break;
         
        }
    }

    
        //timer
        useEffect(() => {
            let interval = null;
            if (isActive) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds + 1);
            }, 1000);
            } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
            }
            return () => clearInterval(interval);
        }, [isActive, seconds]);
        
  return (
       <Card className={classes.card}>
            {/*-------------------------------------------------header------------------------------------*/}
            <CardHeader avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                  {exerciseIndex}
              </Avatar>
            }
            action={
              <Fragment>
               <IconButton aria-label="1" onClick={()=>features('PREV_WORKOUT')}> 
               <KeyboardArrowLeftIcon />
             </IconButton>
              
              <IconButton aria-label="1" onClick={()=>features('NEXT_WORKOUT')}> 
                <KeyboardArrowRightIcon />
              </IconButton>
             
             </Fragment>

            }
            title={exercise.exerciseName }
            subheader={" - " + exercise.idealSets + " Sets x " + exercise.idealReps +" Reps | " + exercise.restTime + "s Rest" }
          />
           {/*-------------------------------------------------reps------------------------------------*/}
        
           <CardContent>
       
                <form className={classes.root} noValidate autoComplete="off">
                <Typography variant="subtitle1">
                    {whichSet[setCount]}
                </Typography>
                    
                    <TextField id="outlined-basic"  variant="outlined" defaultValue={exercise.idealReps} onChange={e => setRepsCompleted(e.target.value)} />
                </form>


               
            </CardContent>
              {/*-------------------------------------------------rest------------------------------------*/}
        
            <CardContent>
                <Typography>Rest Timer</Typography> 
                <Typography>{seconds}s</Typography> 
      
            </CardContent>
             {/*-------------------------------------------------buttons------------------------------------*/}
             <CardActions disableSpacing>
                <Button variant="contained" color="primary" onClick={()=>features('NEXT_SET')}>
                    Next Set
                </Button>

                <Button  variant="contained" color="primary" onClick={()=>features('TIME_TOGGLE')}>
                    {isActive ? 'Pause' : 'Start'}
                </Button>

                <Button onClick={()=>features('TIME_RESET')} variant="contained" color="primary">
                    Reset
                </Button>
            
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expandedVideo,
                    })}
                    onClick={()=>features('EXPAND_VIDEO')}
                    aria-expanded={expandedVideo}
                    aria-label="show more"
                >

                <YouTubeIcon />

                </IconButton>

                
            
          </CardActions>

             {/*-------------------------------------------------video------------------------------------*/}
           <Collapse in={expandedVideo} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>
                Youtube Video
              </Typography>
              <Typography paragraph>
              <iframe width="560" height="315" src={props.editUrl(exercise.optionYoutubeUrl)} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </Typography>
              <Typography paragraph>
            
              </Typography>
              <Typography>
      
              </Typography>
            </CardContent>
          </Collapse>
    
          

        </Card>     

  );
}

export default GymSession;