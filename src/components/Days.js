import React from 'react';
import EditDayExerciseForm from './EditDayExerciseForm'

class Days extends React.Component{

    handleClick = (event) => {
        
        this.props.updateSelectedRoutine(event.currentTarget.className);
    }
    render(){
        return(
            <div>
                <div className="day1" onClick = {this.handleClick}>
                <span>Day 1</span>
                 {Object.keys(this.props.day1s).map(key =>
                    <EditDayExerciseForm 
                            key={key}
                            index={key}
                            exercise={this.props.day1s[key]}
                            updateExercise ={this.props.updateExercise}
                            deleteExercise = {this.props.deleteExercise}
                            
                        />
                    )}
                </div>
                <div className="day2" onClick = {this.handleClick}>
                    <span>Day 2</span>
                    {Object.keys(this.props.day2s).map(key =>
                    <EditDayExerciseForm 
                            key={key}
                            index={key}
                            exercise={this.props.day2s[key]}
                            updateExercise ={this.props.updateExercise}
                            deleteExercise = {this.props.deleteExercise}
                            
                        />
                    )}
                </div>
                <div className="day3" onClick = {this.handleClick}>
                <span>Day 3</span>
                {Object.keys(this.props.day3s).map(key =>
                    <EditDayExerciseForm 
                            key={key}
                            index={key}
                            exercise={this.props.day3s[key]}
                            updateExercise ={this.props.updateExercise}
                            deleteExercise = {this.props.deleteExercise}     
                        />
                    )}
                    
                </div>
            </div>
        );
    }
}

export default Days