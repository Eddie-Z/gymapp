import React from 'react'
import AddWorkoutForm from './AddWorkoutForm'
import ExerciseList from './ExerciseList'
import Days from './Days'
import Paper from '@material-ui/core/Paper';
import Header from './Header';
import { TextField, CardActions ,Button, CardContent, Grid,Card, Typography,Tabs,Tab,AppBar} from '@material-ui/core';


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

  

class Buildworkout extends React.Component {

    state ={
        exercises:{},
        //which div is selected
        selectedRoutine:{},
        //exercises for the states
        day1s:{},
        day2s:{},
        day3s:{}
    };
    
    addExercise = exercise =>{
        //take copy of exisiting exercises
        const exercises = {...this.state.exercises};
        //add new exercise
        exercises[`exercise${Date.now()}`] = exercise;
        //set state as new state
        this.setState({exercises:exercises});
        console.log(this.state.exercises);
    }
    updateExercise = (key,updatedExercise ) => {
        //copy of exercise
        const exercises = {...this.state.exercises};
        //update the state
        exercises[key] = updatedExercise;
        this.setState({exercises:exercises});
    };
    deleteExercise = (key) =>{
        const exercises = {...this.state.exercises};
        console.log(exercises[key])
        delete exercises[key]
        this.setState({exercises:exercises});
    };
    updateSelectedRoutine = (chosen) =>{
        let selectedRoutine;
        switch(chosen){
            case "day1":
                selectedRoutine = {...this.state.selectedRoutine}
                selectedRoutine="day1"
                this.setState({selectedRoutine:selectedRoutine})
                break;
            case "day2":
                selectedRoutine = {...this.state.selectedRoutine}
                selectedRoutine="day2"
                this.setState({selectedRoutine:selectedRoutine})
                break;
            case "day3":
                selectedRoutine = {...this.state.selectedRoutine}
                selectedRoutine="day3"
                this.setState({selectedRoutine:selectedRoutine})
                break;
        default:
            alert('Choose');
        }
    }
    addDayExercise = (key) =>{
        const exercises = {...this.state.exercises};
        const dayExercise = exercises[key];
        switch(this.state.selectedRoutine){
            case "day1":
                    const day1s = {...this.state.day1s};
                    //add new exercise
                    day1s[`day1${Date.now()}`] = dayExercise;
                    //set state as new state
                    this.setState({day1s:day1s});
                break;
            case "day2":
                    const day2s = {...this.state.day2s};
                    //add new exercise
                    day2s[`day2${Date.now()}`] = dayExercise;
                    //set state as new state
                    this.setState({day2s:day2s});
                break;
            case "day3":
                    const day3s = {...this.state.day3s};
                    //add new exercise
                    day3s[`day3${Date.now()}`] = dayExercise;
                    //set state as new state
                    this.setState({day3s:day3s});
                break;
            default:
                alert("error");
        }
    }

    render(){
        
        return(

            <Grid container >
                    <Header/>
                
                    <Grid item sm>
                        <Paper style={style.paper}>
                            <Typography color="textSecondary">
                            ADD EXERCISE
                            </Typography>
                            <AddWorkoutForm addExercise={this.addExercise}/>
                        </Paper>
                    </Grid>
                
                    <Grid item sm>
                        <Paper style={style.paper}>
                                <Typography color="textSecondary">
                                EXERCISE COLLECTION
                                </Typography>
                                <ExerciseList exercises={this.state.exercises} updateExercise={this.updateExercise} deleteExercise={this.deleteExercise} addDayExercise={this.addDayExercise}/>
                            
                        </Paper>
                    </Grid>
                
                    <Grid item sm>
                    
                        <Paper style={style.paper3}>
                                <Typography color="textSecondary">
                                EXERCISE ROUTINE
                                </Typography>
                                <Days day1s={this.state.day1s} day2s={this.state.day2s} day3s={this.state.day3s} selectedRoutine={this.state.selectedRoutine} exercises={this.state.exercises}  updateSelectedRoutine={this.updateSelectedRoutine}/>
                                
                                
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

}
export default Buildworkout

