import React, {useContext,useEffect, Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { Grid, Paper,Tabs,Tab,AppBar,Button,TextField} from '@material-ui/core';
import Countdown from './Countdown';
import BuildWorkoutContextProvider from '../../contexts/Provider';
import {BuildWorkoutContext} from '../../contexts/Provider'
import firebase from '../../firebase'


const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 500,
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




 const GymSession = () => {


  const [seconds, setSeconds] = React.useState(0);
  const [isActive, setIsActive] = React.useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(0);
    setIsActive(false);
  }

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

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [expanded2, setExpanded2] = React.useState(false);

  

  let initialDayState = 0
  let initialCardState = 1
  let initialSetsState =0
  let setsStates = ["First Set", "Second set","Third Set", "Fourth Set"]

  const {state} = useContext(BuildWorkoutContext);
  const [dayState,setDayState] = React.useState(initialDayState)
  const [setsState,setSetsState] = React.useState(initialSetsState)
  const [cardState,setCardState] = React.useState(initialCardState)

  const [ users, setUsers ] = React.useState([]);
 
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleExpandClick2 = () => {
    setExpanded2(!expanded2);
  };
 
   
  const prevWorkout = () =>{
    if(cardState!==1){
    setCardState(cardState-1)   
   }
  }

  const nextWorkout = () =>{
    setCardState(cardState+1)   
  }
  const nextSet = () =>{
    console.log(setsState)
    console.log(state.exercise[cardState].idealSets)
    setSetsState(setsState+1)
    reset()
    //reset
    if(setsState==state.exercise[cardState].idealSets-1){
      setCardState(cardState+1) 
      setSetsState(0)
     
    }

    const finishedExercise = {
       [`${Date.now()}`] : {
        day:"1",
        exerciseName:"yo",
        finishedReps:"yo",
        restTime:"yo"
      }
    }
    const db = firebase.firestore();
   db.collection("spells").doc("exerciseHistory").set(finishedExercise);
   
    
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
  }



  let selectedExercise = state.exercise[cardState];
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
              <IconButton aria-label="1" onClick={nextWorkout}> 
                <KeyboardArrowRightIcon />
              </IconButton>
              <IconButton aria-label="1" onClick={prevWorkout}> 
               <KeyboardArrowLeftIcon />
             </IconButton>
             </Fragment>

            }
            title={selectedExercise.exerciseName   }
            subheader={" - " + selectedExercise.idealSets + " Sets x " + selectedExercise.idealReps +" Reps | " + selectedExercise.restTime + "s Rest"  }
          />
      
            <form className={classes.root} noValidate autoComplete="off">
          <Typography variant="h5">
            {setsStates[setsState]}
          </Typography>:
            
            <TextField id="outlined-basic" label="Reps Compelete" variant="outlined" />
          </form>
        
          <CardContent>
    
          <div className="time">
            {seconds}s
          </div>
          <div className="row">
            <Button  variant="contained" color="primary" onClick={toggle}>
              {isActive ? 'Pause' : 'Start'}
            </Button>
            <Button onClick={reset} variant="contained" color="primary">
              Reset
            </Button>
          </div>
              
          </CardContent>

          <CardActions disableSpacing>
          <Button variant="contained" color="primary" onClick={nextSet}>
            Next Set
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
      



