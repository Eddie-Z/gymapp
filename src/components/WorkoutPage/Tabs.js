import React, {useContext,useEffect,useState} from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { green } from '@material-ui/core/colors';
import Box from '@material-ui/core/Box';
import GymSession from './gymSession'
import {BuildWorkoutContext} from '../../contexts/Provider'
import firebase from '../../firebase'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    'aria-controls': `action-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 1200,
    position: 'relative',
    minHeight: 200,
    margin:'auto'
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  fabGreen: {
    color: theme.palette.common.white,
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[600],
    },
  },
}));

export default function FloatingActionButtonZoom() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = useState(0);
   

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

 const {monday,tuesday,wednesday,thursday,friday,saturday,sunday,editUrl,exerciseIndex} = useContext(BuildWorkoutContext);
  const mondayExercise = monday[Object.keys(monday)[exerciseIndex]];
  const tuesdayExercise = tuesday[Object.keys(tuesday)[exerciseIndex]];
  const wednesdayExercise = wednesday[Object.keys(wednesday)[exerciseIndex]];
  const thursdayExercise = thursday[Object.keys(thursday)[exerciseIndex]];
  const fridayExercise = friday[Object.keys(friday)[exerciseIndex]];
  const saturdayExercise = saturday[Object.keys(saturday)[exerciseIndex]];
  const sundayExercise = sunday[Object.keys(sunday)[exerciseIndex]];


  const monKey = Object.keys(monday)[exerciseIndex]
  const tueKey = Object.keys(tuesday)[exerciseIndex]
  const wedKey = Object.keys(wednesday)[exerciseIndex]
  const thurKey = Object.keys(thursday)[exerciseIndex]
  const friKey = Object.keys(friday)[exerciseIndex]
  const satKey = Object.keys(saturday)[exerciseIndex]
  const sunKey = Object.keys(sunday)[exerciseIndex]
  debugger

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="action tabs example"
        >
          <Tab label="MONDAY" {...a11yProps(0)} />
          <Tab label="TUESDAY" {...a11yProps(1)} />
          <Tab label="WEDNESDAY" {...a11yProps(2)} />
          <Tab label="THURSDAY" {...a11yProps(3)} />
          <Tab label="FRIDAY" {...a11yProps(4)} />
          <Tab label="SATURDAY" {...a11yProps(5)} />
          <Tab label="SUNDAY" {...a11yProps(6)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}> 
            { mondayExercise ? <GymSession index={monKey} len={Object.keys(monday).length} routine={mondayExercise} editUrl={editUrl}/> : <p>Congrats, you have finished the routine or didn't add</p> }
   
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
            {tuesdayExercise ? <GymSession index={tueKey} len={Object.keys(tuesday).length} routine={tuesdayExercise} editUrl={editUrl} exerciseIndex={exerciseIndex} />  : <p>Congrats, you have finished the routine or didn't add</p> }
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
            { wednesdayExercise ?<GymSession index={wedKey} len={Object.keys(wednesday).length} routine={wednesdayExercise} editUrl={editUrl} exerciseIndex={exerciseIndex} />  : <p>Congrats, you have finished the routine or didn't add</p>}
  
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
        { thursdayExercise ?<GymSession index={thurKey} len={Object.keys(thursday).length} routine={thursdayExercise} editUrl={editUrl} exerciseIndex={exerciseIndex} /> : <p>Congrats, you have finished the routine or didn't add</p> }
  
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
        { fridayExercise ?<GymSession index={friKey} len={Object.keys(friday).length} routine={fridayExercise} editUrl={editUrl} exerciseIndex={exerciseIndex} /> : <p>Congrats, you have finished the routine or didn't add</p> }
  
        </TabPanel>
        <TabPanel value={value} index={5} dir={theme.direction}>
        { saturdayExercise ? <GymSession index={satKey} len={Object.keys(saturday).length} routine={saturdayExercise} editUrl={editUrl} exerciseIndex={exerciseIndex} /> : <p>Congrats, you have finished the routine or didn't add</p>}
  
        </TabPanel>
        <TabPanel value={value} index={6} dir={theme.direction}>
        { sundayExercise ?<GymSession index={sunKey} len={Object.keys(sunday).length} routine={sundayExercise} editUrl={editUrl} exerciseIndex={exerciseIndex} /> : <p>Congrats, you have finished the routine or didn't add</p> }
  
        </TabPanel>
      </SwipeableViews>

    </div>
  );
}