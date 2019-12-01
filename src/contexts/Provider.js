import React, {createContext,useState} from 'react';
import uuid from 'uuid/v4'

export const BuildWorkoutContext = createContext();

const BuildWorkoutContextProvider = (props) => {

    //states
    const [exercises,setExercises] = useState([])
    const [days1,setDays1] = useState([])
    const [days2,setDays2] = useState([])
    const [days3,setDays3] = useState([])
    const [selectedRoutines,setSelectedRoutines] = useState([])

    //modify
    const addExercise = (exerciseName,idealSets,idealReps,restTime,optionYoutubeUrl,type) => {
        const newExercise= {
            exerciseName: exerciseName,
            idealSets: idealSets,
            idealReps:idealReps,
            restTime: restTime,
            optionYoutubeUrl: optionYoutubeUrl,
            type: type,
            id: uuid()
         }
        setExercises([...exercises,newExercise])
    }

    //delete
    const removeExercise = (id) =>{
        setExercises(exercises.filter(exercise => exercise.id!==id))
    }

    //delete routine
    const removeRoutine = (id) =>{
        setDays1(days1.filter(exercise => exercise.id!==id))
        setDays2(days2.filter(exercise => exercise.id!==id))
        setDays3(days3.filter(exercise => exercise.id!==id))
    }
    //update wokrout

    const updateSelectedRoutine = (chosen) =>{
        switch(chosen){
            case "day1":
                setSelectedRoutines({selectedRoutine:'day1'})
                break;
            case "day2":
                setSelectedRoutines({selectedRoutine:'day2'})
                break;
            case "day3":
                setSelectedRoutines({selectedRoutine:'day3'})
                break;
        default:
            alert('Choose');
        }
    }

    const addDayExercise = (exercise) =>{
        const copyExercise = {...exercise}
        console.log("test")
        console.log(copyExercise)
        copyExercise.id=uuid();
        exercise=copyExercise
        switch(selectedRoutines.selectedRoutine){
            case "day1":      
                    setDays1([...days1,exercise])
                break;
            case "day2":
                    setDays2([...days2,exercise])
                break;
            case "day3":
                    setDays3([...days3,exercise])
                break;
            default:
                alert("error");
        }
        // const exercises = {...this.state.exercises};
        // const dayExercise = exercises[key];
        // switch(this.state.selectedRoutine){
        //     case "day1":
        //             console.log("day1 add")
        //             const day1s = {...this.state.day1s};
        //             //add new exercise
        //             day1s[`day1${Date.now()}`] = dayExercise;
        //             //set state as new state
        //             this.setState({day1s:day1s});
        //         break;
        //     case "day2":
        //             const day2s = {...this.state.day2s};
        //             //add new exercise
        //             day2s[`day2${Date.now()}`] = dayExercise;
        //             //set state as new state
        //             this.setState({day2s:day2s});
        //         break;
        //     case "day3":
        //             const day3s = {...this.state.day3s};
        //             //add new exercise
        //             day3s[`day3${Date.now()}`] = dayExercise;
        //             //set state as new state
        //             this.setState({day3s:day3s});
        //         break;
        //     default:
        //         alert("error");
        // }
    }
    //use filter to remove days
        return(
            <BuildWorkoutContext.Provider value={{removeRoutine,removeExercise, exercises,selectedRoutines,days1,days2,days3,addExercise,addDayExercise, updateSelectedRoutine}}>
                {props.children}
            </BuildWorkoutContext.Provider>
        )
}

//this.props.children is the other file. they become the children
export default BuildWorkoutContextProvider;