import React, { Component } from 'react'
import { Grid, Paper,Tabs,Tab,AppBar,Button} from '@material-ui/core';
import { Link } from 'react-router-dom';


const style = {
    paper: {
      padding:30,
      width:400,
      height:'80vh',
      margin:5,
    }
  };


const FrontPage = () => {

        return (
            <Grid container >

                <Grid item xs={12} >
                    <Grid container justify="center" >
                        <Grid item >
                            <Paper style={style.paper}>      
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
