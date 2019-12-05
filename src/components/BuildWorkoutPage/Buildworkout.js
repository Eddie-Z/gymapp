import React from 'react'
import AddWorkoutForm from './AddWorkoutForm'
import ExerciseList from './ExerciseList'
import Days from './Days'
import Paper from '@material-ui/core/Paper';
import Header from './Header';
import { Grid, Typography,Tabs,Tab,AppBar} from '@material-ui/core';


const style = {
    paper: {
      padding:30,
      width:400,
      height:'80vh',
      margin:5,
      overflow:'scroll'
    },
    paper3: {
        padding:30,
        width:400,
        height:'73vh',
        margin:5,
        overflow:'scroll'
      },
    appBar: {
        top: 'auto',
        bottom: 0,
        margin:7,
        width:463

      }
  };

 
//could replace with material-table https://material-ui.com/components/tables/
const Buildworkout = () => {
        return(
                <Grid container >
                        <Header/>
                    
                        <Grid item sm>
                            <Paper style={style.paper}>
                                <Typography color="textSecondary">
                                ADD EXERCISE
                                </Typography>
                                <AddWorkoutForm/>
                            </Paper>
                        </Grid>
                        <Grid item sm>
                            <Paper style={style.paper}>
                                    <Typography color="textSecondary">
                                    EXERCISE COLLECTION
                                    </Typography>
                                    <ExerciseList />
                            </Paper>
                        </Grid>
                        <Grid item sm>
                            <Paper style={style.paper3}>
                                    <Typography color="textSecondary">
                                    EXERCISE ROUTINE
                                    </Typography>
                                    <Days />  
                            </Paper>
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
                        </Grid>             
                </Grid>
        )
}
export default Buildworkout

