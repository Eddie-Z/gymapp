import React, {useContext,useEffect, Fragment} from 'react';
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
import firebase from '../../firebase'


const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 700,
    padding:10,
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

 const GymSession = ({whichDay}) => {
  let initialCardState = 1
  let initialSetsState =0
  let setsStates = ["First Set", "Second set","Third Set", "Fourth Set"]

  //exercise day
  const {state} = useContext(BuildWorkoutContext); 
  //index sets
  const [setsState,setSetsState] = React.useState(initialSetsState)
  //index each exercise
  const [cardState,setCardState] = React.useState(initialCardState)
  //time
  const [seconds, setSeconds] = React.useState(0);
  const [isActive, setIsActive] = React.useState(false);
  const classes = useStyles();
  //reps
  const [repsComplete,setRepsComplete] = React.useState();
 
  //videos
  const [expandedVideo, setExpandedVideo] = React.useState(false);
  const [expandedWorkout, setExpandedWorkout] = React.useState(false);
  //finished exercises
  const [finishedExercises,setFinishedExercises] = React.useState({});


  //let selectedExercise = state.exercise[cardState];
  let selectedExercise = state[`${whichDay}`][cardState];
  //console.log();
   
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

  const features = (action) =>{

    switch(action){
      case 'EXPAND_VIDEO':
          setExpandedVideo(!expandedVideo);
          break;
      case 'EXPAND_ROUTINE_LIST':
          setExpandedWorkout(!expandedWorkout);
          break;
      case 'TIME_TOGGLE':
          setIsActive(!isActive);
          break;
      case 'TIME_RESET':
          setSeconds(0);
          setIsActive(false);
          break;
      case 'NEXT_WORKOUT':
          setCardState(cardState+1)   
          break;
      case 'PREV_WORKOUT':
          if(cardState!==1){
            setCardState(cardState-1)   
           }
           break;
      case 'NEXT_SET':
          setSetsState(setsState+1)
           //call time reset
           setSeconds(0);
           setIsActive(false);
          //reset
          if(setsState==state.exercise[cardState].idealSets-1){
            setCardState(cardState+1) 
            setSetsState(0)
          }
          //add to database
          const today = new Date();
          const date = today.getFullYear()+""+(today.getMonth()+1)+""+today.getDate();
         
          const db = firebase.firestore();
          const fetchData = async () => {
          const data =  await db.collection("spells").get();
      
        const dDate = `d${date}`

         const inputExercise= {
          [`d${date}`]: [
                    {
                    day:"selectedExercise.day",
                    exerciseName:selectedExercise.exerciseName,
                    finishedReps:repsComplete,
                    restTime:seconds
                    }
                  ]
         }
      
         const newExercise = JSON.parse(JSON.stringify(data.docs[2].data()));
         let found = true;
         (newExercise.test).map(whichDate=>{ 
           //if date exist, add to that one
           if(Object.keys(whichDate)==dDate){
             console.log("found!")
             whichDate[`${dDate}`] = [...whichDate[`${dDate}`],inputExercise[`${dDate}`][0]];
             found=false;
            
           }
         })
         if(found==true){
            newExercise.test= [...newExercise.test,inputExercise]
         }
         console.log(newExercise);
         db.collection("spells").doc("test").set(newExercise);
       
  
          };
          fetchData();   
          setRepsComplete()
          break;

        }
  } 
 
  return (
     
      <Card className={classes.card}>
      
        {
         
          // <p>{state.exercise[2].exerciseName}</p> 
          (state.exercise[0].exerciseName==="first") ? <p>loading</p> :
          <Fragment>
          <CardHeader avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                {cardState}
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
            title={selectedExercise.exerciseName}
            subheader={" - " + selectedExercise.idealSets + " Sets x " + selectedExercise.idealReps +" Reps | " + selectedExercise.restTime + "s Rest"  }
          />
          
      
      
        
          <CardContent>
       
          <form className={classes.root} noValidate autoComplete="off">
          <Typography variant="subtitle1">
            {setsStates[setsState]}
          </Typography>
            
            <TextField id="outlined-basic" label="Reps Compelete" variant="outlined" value={repsComplete} onChange={e => setRepsComplete(e.target.value)} />
          </form>


          <Typography>Rest Timer</Typography> 
          <Typography>{seconds}s</Typography> 
          
    
      
              
          </CardContent>

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

            

            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expandedWorkout,
              })}
              onClick={()=>features('EXPAND_ROUTINE_LIST')}
              aria-expanded={expandedWorkout}
              aria-label="show more"
            >
              <ExpandMoreIcon />

            </IconButton>
            
          </CardActions>

          <Collapse in={expandedVideo} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Tutorial:</Typography>
              <Typography paragraph>
                Youtube Video
              </Typography>
              <Typography paragraph>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLx0sYbCqOb8TBPRdmBHs5Iftvv9TPboYG" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
              </Typography>
              <Typography paragraph>
            
              </Typography>
              <Typography>
      
              </Typography>
            </CardContent>
          </Collapse>


          <Collapse in={expandedWorkout} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>List of Exercises:</Typography>
              {state[`${whichDay}`].map(exercise =>
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
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        </Grid>
                    )}
            </CardContent>
          </Collapse>
          
          </Fragment>
          
          
          
        
        }
  
       </Card>
    
      
      
  );
}

export default GymSession;


 /*
   <Fragment>
            <CardHeader avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  1/12
                </Avatar>
              }
              action={
                <IconButton aria-label="1" onClick={nextWorkout}> 
                  <NavigateNextIcon />
                </IconButton>
              }
              title={eachExercise.exerciseName   }
              subheader={" - " + eachExercise.idealSets + " Sets x " + eachExercise.idealReps +" Reps | " + eachExercise.restTime + "s Rest"  }
            />
        
              <form className={classes.root} noValidate autoComplete="off">
            <Typography variant="h5">
              First Set
            </Typography>:
              
              <TextField id="outlined-basic" label="Reps Compelete" variant="outlined" />
            </form>
          
            <CardContent>
      
            <Countdown restTime={state.days1[0].restTime}/>
            
            </CardContent>

            <CardActions disableSpacing>
            <Button variant="contained" color="primary">
              Next Set
            </Button>
            <Button variant="contained" color="primary">
              Pause
            </Button>
            <Button variant="contained" color="primary">
              Reset
            </Button>
            <Button variant="contained" color="primary">
              Rest
            </Button>

              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />

              </IconButton>

              

              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick2}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />

              </IconButton>
              
            </CardActions>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Method:</Typography>
                <Typography paragraph>
                  Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                  minutes.
                </Typography>
                <Typography paragraph>
                  Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                  heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                  browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                  and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                  pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                  saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                </Typography>
                <Typography paragraph>
                  Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                  without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                  medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                  again without stirring, until mussels have opened and rice is just tender, 5 to 7
                  minutes more. (Discard any mussels that don’t open.)
                </Typography>
                <Typography>
                  Set aside off of the heat to let rest for 10 minutes, and then serve.
                </Typography>
              </CardContent>
            </Collapse>

            <Collapse in={expanded2} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Nigga:</Typography>
                <Typography paragraph>
                  Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                  minutes.
                </Typography>
                <Typography paragraph>
                  Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                  heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                  browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                  and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                  pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                  saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                </Typography>
                <Typography paragraph>
                  Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                  without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                  medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                  again without stirring, until mussels have opened and rice is just tender, 5 to 7
                  minutes more. (Discard any mussels that don’t open.)
                </Typography>
                <Typography>
                  Set aside off of the heat to let rest for 10 minutes, and then serve.
                </Typography>
              </CardContent>
            </Collapse>
            </Fragment>
            */
      






             //   const addExercise = (exerciseName,idealSets,idealReps,restTime,optionYoutubeUrl,type) => {
  //     const inputExercise= {
  //         exerciseName: exerciseName,
  //         idealSets: idealSets,
  //         idealReps:idealReps,
  //         restTime: restTime,
  //         optionYoutubeUrl: optionYoutubeUrl,
  //         type: type,
  //         id: uuid()
  //      }

  //      const newExercise = JSON.parse(JSON.stringify(state));
  //      newExercise.exercise= [...state.exercise,inputExercise]
  //    //  console.log(newExercise)
  //   //   setState(newExercise);

  //      //firebase addd
  //      const db = firebase.firestore();
  //      db.collection("spells").doc("0").set(newExercise);
      
  // }