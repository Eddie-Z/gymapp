import React, { Component, useContext } from 'react'
import { Grid, Paper,Tabs,Tab,AppBar,Button} from '@material-ui/core';
import { Link } from 'react-router-dom';
import {BuildWorkoutContext} from '../../contexts/Provider'

const style = {
    paper: {
      padding:30,
      width:400,
      height:'80vh',
      margin:5,
    }
  };


const FrontPage = () => {
    const {spells} = useContext(BuildWorkoutContext);


        return (
            <Grid container >

                <Grid item xs={12} >
                    <Grid container justify="center" >
                        <Grid item >
                            <Paper style={style.paper}>      

                            {spells.map(spell => (
                             
                                    console.log(spell)
                            
                            ))}
                                                    <Button component={Link} to="/buildworkout" color="primary">
                            MyButton
                            </Button>              
                            <Button component={Link} to="workout" color="primary">
                            MyButton
                            </Button>
                            </Paper>
                        </Grid>
                
                    </Grid>

                </Grid>
            </Grid>
    

        )
}

export default FrontPage
