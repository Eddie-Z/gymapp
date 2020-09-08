import React, {useEffect, useContext} from 'react';
import {BuildWorkoutContext} from '../../contexts/Provider'
import AddWorkoutForm from './AddWorkoutForm'
import ExerciseList from './ExerciseList'
import Routines from './Routines'
import Workouts from './Workouts'
import Paper from '@material-ui/core/Paper';

import firebase from '../../firebase'

import Tabs from '../WorkoutPage/Tabs'



//material ui
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';



const useStyles = makeStyles((theme) => ({
    '@global': {
      ul: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
      },
    },
    appBar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
      flexWrap: 'wrap',
    },
    toolbarTitle: {
      flexGrow: 1,
    },
    link: {
      margin: theme.spacing(1, 1.5),
    },
    heroContent: {
      padding: theme.spacing(8, 0, 6),
    },
    cardHeader: {
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
    },
    cardPricing: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'baseline',
      marginBottom: theme.spacing(2),
    },
    footer: {
      borderTop: `1px solid ${theme.palette.divider}`,
      marginTop: theme.spacing(8),
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
      [theme.breakpoints.up('sm')]: {
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(6),
      },
    },
  }));
  
 
//could replace with material-table https://material-ui.com/components/tables/
const Buildworkout = () => {

    //material ui
    const classes = useStyles();

    const {exercises,setExercises,buildToggle,setBuildToggle,editToggle} = useContext(BuildWorkoutContext);

        //lifecycles
    
   
        React.useEffect(() => {
            //get data
            var docRef = firebase.firestore().collection("test").doc("test2");
            // Valid options for source are 'server', 'cache', or
            // 'default'. See https://firebase.google.com/docs/reference/js/firebase.firestore.GetOptions
            // for more information.
            var getOptions = {
         //   source: 'cache'
            };
  
            // Get a document, forcing the SDK to fetch from the offline cache.
            docRef.get(getOptions).then(function(doc) {
            // Document was found in the cache. If no cached document exists,
            // an error will be returned to the 'catch' block below.
            console.log("Cached document data:", doc.data().newExercises);
                setExercises(doc.data().newExercises);
            }).catch(function(error) {
            console.log("Error getting cached document:", error);
            });


   }, exercises);


        
        return(

            <React.Fragment>

            <Container maxWidth="sm" component="main" className={classes.heroContent}>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Workout Builder App
            </Typography>


            <Typography variant="h5" align="center" color="textSecondary" component="p">
             {buildToggle ?"Add exercises to exercise lists and create a routine for every day of the week." : "Time to go through the exercises you've configured for every day of the week!"}
            </Typography>

            <div style={{paddingLeft:'150px'}}>

          <Button variant="outlined" color="primary" onClick={()=>setBuildToggle(true)}>
            Workout Builder
          </Button>
          <Button variant="outlined" color="secondary" onClick={()=>setBuildToggle(false)}>
            Built Routines
          </Button>
            </div>

          </Container>
            <Container maxWidth="xl" component="main">
                {buildToggle ? <Grid container spacing={3} alignItems="flex-end">
                    <Workouts/>
                    <ExerciseList />
                    <Routines/>
                </Grid>
                :
                 <Grid container spacing={3} alignItems="flex-end">
                    <Tabs/>
                </Grid>

                
              
                }
               
            </Container>
            </React.Fragment>
        )
}
export default Buildworkout

/*
 <AppBar position="relative" color="default" style={style.appBar}>
                                        <Tabs
                                        indicatorColor="primary"
                                        textColor="primary"
                                        variant="fullWidth"
                                        aria-label="full width tabs example"
                                        >
                                        <Tab label="All" />
                                        <Tab label="Day 1" />
                                        <Tab label="Day 2"/>
                                        </Tabs>
                            </AppBar>


*/