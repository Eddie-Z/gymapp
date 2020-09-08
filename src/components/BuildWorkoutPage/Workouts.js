import React,{useContext} from 'react'
import AddWorkoutForm from './AddWorkoutForm'
import {BuildWorkoutContext} from '../../contexts/Provider'
import EditWorkoutForm from './EditWorkoutForm';

//material ui

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


const useStyles = makeStyles((theme) => ({
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
    cardStyle: {
      display: 'block',
      transitionDuration: '0.3s',
      height: '30vw',
 

  }

  }));
  

const Workouts = () => {

    const classes = useStyles();

    const {exercises,editToggle} = useContext(BuildWorkoutContext);
   
    return(
        <React.Fragment>
        <Grid item key={"ADD"} xs={12} sm={6} md={4}>
        <Card className={classes.cardStyle}>
          <CardHeader
            title={"Add Exercise"}
            titleTypographyProps={{ align: 'center' }}
            subheaderTypographyProps={{ align: 'center' }}
            className={classes.cardHeader}
          />
          <CardContent>
            <div className={classes.cardPricing}>
              {editToggle?  <AddWorkoutForm></AddWorkoutForm> : <EditWorkoutForm></EditWorkoutForm>}
               
            </div>
  
          </CardContent>

        </Card>
      </Grid>
        
         </React.Fragment>
    )
}
export default Workouts