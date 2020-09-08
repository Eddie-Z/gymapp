import React, {useContext,useState} from 'react';
import {BuildWorkoutContext} from '../../contexts/Provider'
import RoutineExercise from './RoutineExercise'



//material ui
import {List} from '@material-ui/core';
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
    cardStyle: {
        display: 'block',
        transitionDuration: '0.3s',
        height: '30vw',

    },
    buttonDiv:{
      padding:'25px',
      display:'flex',
      justifyContent:'center'
    }
  
  }));

  const tier = [
    {
      title: 'legit',
      price: '0',
      description: ['10 users included', '2 GB of storage', 'Help center access', 'Email support'],
      buttonText: 'Sign up for free',
      buttonVariant: 'outlined',
    },
    {
      title: 'Pro',
      subheader: 'Most popular',
      price: '15',
      description: [
        '20 users included',
        '10 GB of storage',
        'Help center access',
        'Priority email support',
      ],
      buttonText: 'Get started',
      buttonVariant: 'contained',
    },
    {
      title: 'Enterprise',
      price: '30',
      description: [
        '50 users included',
        '30 GB of storage',
        'Help center access',
        'Phone & email support',
      ],
      buttonText: 'Contact us',
      buttonVariant: 'outlined',
    },
  ];
  

const Routines = () => {

    const classes = useStyles();

    const {selectedDay,addExercise,setSelectedDay,monday,tuesday,wednesday,thursday,friday,saturday,sunday} = useContext(BuildWorkoutContext);

    const handleClick = (e) => {
        e.preventDefault();
        console.log(e.currentTarget.name);
        setSelectedDay(e.currentTarget.name);
      
  
    }
        return(     
            <React.Fragment>


                <Grid item key={"Routines"} xs={12} sm={6} md={4}>
                <Card className={classes.cardStyle}>
                <CardHeader
                  title={"Routines"}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  className={classes.cardHeader}
                />
           
                    <div className={classes.buttonDiv}>
                    <Button name="MON" variant={tier.buttonVariant} color="primary" size="medium" onClick={handleClick}>MON</Button>
                    <Button name="TU" variant={tier.buttonVariant} color="primary" size="medium" onClick={handleClick}>TUES</Button>
                    <Button name="WED" variant={tier.buttonVariant} color="primary" size="medium" onClick={handleClick}>WED</Button>
                    <Button name="THU"variant={tier.buttonVariant} color="primary" size="medium"  onClick={handleClick}>THUR</Button>
                    <Button name="FRI" variant={tier.buttonVariant} color="primary" size="medium" onClick={handleClick}>FRI</Button>
                    <Button name="SAT" variant={tier.buttonVariant} color="primary" size="medium" onClick={handleClick}>SAT</Button>
                    <Button name="SUN" variant={tier.buttonVariant} color="primary" size="medium" onClick={handleClick}>SUN</Button>
                    </div>
                  
         
                <CardContent style={{maxHeight: '70%', overflow: 'auto'}}>
                 
                    <List>
                  {selectedDay=="MON" ?  Object.keys(monday).map(key=> <RoutineExercise index={key} routine={monday}/>) :""}
                     {selectedDay=="TU" ? Object.keys(tuesday).map(key=> <RoutineExercise index={key} routine={tuesday}/>)  :""}
                     {selectedDay=="WED" ? Object.keys(wednesday).map(key=> <RoutineExercise index={key} routine={wednesday}/>)  :""}
                     {selectedDay=="THU" ? Object.keys(thursday).map(key=> <RoutineExercise index={key} routine={thursday}/>)  :""}
                     {selectedDay=="FRI" ? Object.keys(friday).map(key=> <RoutineExercise index={key} routine={friday}/>)  :""}
                     {selectedDay=="SAT" ? Object.keys(saturday).map(key=> <RoutineExercise index={key} routine={saturday}/>)  :""}
                     {selectedDay=="SUN" ? Object.keys(sunday).map(key=> <RoutineExercise index={key} routine={sunday}/>)  :""}
                     </List>
     
        
                </CardContent>
          
              </Card>
            </Grid>
            

         
                </React.Fragment>
        )
}
export default Routines;