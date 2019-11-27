import React from 'react';
import EditDayExerciseForm from './EditDayExerciseForm'
import { List,ListItem, ListItemText, Typography, Divider,Grid} from '@material-ui/core';

class Days extends React.Component{

    handleClick = (event) => {
        
        this.props.updateSelectedRoutine(event.currentTarget.className);
        console.log(event.currentTarget.className);
    }
    render(){
        return(
            <React.Fragment>
    
            <List className="day1">
            <span className="day1" onClick = {this.handleClick}><Typography variant="body2" color="textSecondary">DAY 1</Typography></span>
            {Object.keys(this.props.day1s).map(key =>
                <Grid>
                <ListItem alignItems="flex-start">
                    <ListItemText
                        primary={this.props.day1s[key].exerciseName}
                        secondary={
                        <React.Fragment>
                            <Typography
                            component="span"
                            variant="body2"
                            color="textPrimary"
                            >
                            {this.props.day1s[key].type}
                            </Typography>
                            - {this.props.day1s[key].idealSets} Set x {this.props.day1s[key].idealReps} Reps | {this.props.day1s[key].restTime}s Rest
                        </React.Fragment>
                        }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
                </Grid>
            )}
          </List>


          <List onClick = {this.handleClick}>
          <span className="day2" onClick = {this.handleClick}><Typography variant="body2" color="textSecondary">DAY 2</Typography></span>
          {Object.keys(this.props.day2s).map(key =>
                <Grid>
                <ListItem alignItems="flex-start">
                    <ListItemText
                        primary={this.props.day2s[key].exerciseName}
                        secondary={
                        <React.Fragment>
                            <Typography
                            component="span"
                            variant="body2"
                            color="textPrimary"
                            >
                            {this.props.day2s[key].type}
                            </Typography>
                            - {this.props.day2s[key].idealSets} Set x {this.props.day2s[key].idealReps} Reps | {this.props.day2s[key].restTime}s Rest
                        </React.Fragment>
                        }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
                </Grid>
            )}
          </List>


          <List onClick = {this.handleClick}>
          <span className="day3" onClick = {this.handleClick}><Typography variant="body2" color="textSecondary">DAY 3</Typography></span>
            {Object.keys(this.props.day3s).map(key =>
                <Grid>
                <ListItem alignItems="flex-start">
                    <ListItemText
                        primary={this.props.day3s[key].exerciseName}
                        secondary={
                        <React.Fragment>
                            <Typography
                            component="span"
                            variant="body2"
                            color="textPrimary"
                            >
                            {this.props.day3s[key].type}
                            </Typography>
                            - {this.props.day3s[key].idealSets} Set x {this.props.day3s[key].idealReps} Reps | {this.props.day3s[key].restTime}s Rest
                        </React.Fragment>
                        }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
                </Grid>
            )}
          </List>














          </React.Fragment>



        );
    }
}

export default Days