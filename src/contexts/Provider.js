import React, {createContext,useState} from 'react';
import uuid from 'uuid/v4'

export const BuildWorkoutContext = createContext();

export function BuildWorkoutContextProvider({children}){

    let initialState = {
        
        exercise: [
                   { exerciseName: "",
                    idealSets: "",
                    idealReps:"",
                    restTime: "",
                    optionYoutubeUrl: "",
                    type: "",
                    id: ""
                }

        ],
        days1: [
            { exerciseName: "",
             idealSets: "",
             idealReps:"",
             restTime: "",
             optionYoutubeUrl: "",
             type: "",
             id: ""
         }
        ],
        days2: [
            { exerciseName: "",
             idealSets: "",
             idealReps:"",
             restTime: "",
             optionYoutubeUrl: "",
             type: "",
             id: ""
         }
        ],
        days3: [
            { exerciseName: "",
             idealSets: "",
             idealReps:"",
             restTime: "",
             optionYoutubeUrl: "",
             type: "",
             id: ""
         }
        ]
    }

    let initialSelectedRoutine = {day:''}

    //states
    const [state,setState] = useState(initialState)
    const [selectedRoutine,setSelectedRoutine] = useState(initialSelectedRoutine)

    //modify

    const updateExercise = (id,updateExercise) => {
        let newExercise = JSON.parse(JSON.stringify(state));
        (newExercise.exercise).map((eachExercise)=>{
            if(eachExercise.id === id){
                eachExercise=updateExercise;
            }
        })
        setState(newExercise);
    }

    const addExercise = (exerciseName,idealSets,idealReps,restTime,optionYoutubeUrl,type) => {
        const inputExercise= {
            exerciseName: exerciseName,
            idealSets: idealSets,
            idealReps:idealReps,
            restTime: restTime,
            optionYoutubeUrl: optionYoutubeUrl,
            type: type,
            id: uuid()
         }

         const newExercise = JSON.parse(JSON.stringify(state));
         newExercise.exercise= [...state.exercise,inputExercise]
       //  console.log(newExercise)
         setState(newExercise)
        
    }

    // //delete
    const removeExercise = (id) =>{
        const newExercise = JSON.parse(JSON.stringify(state));
        newExercise.exercise =newExercise.exercise.filter(exercise => exercise.id !== id);
        setState(newExercise)
    }

    //delete routine
    const removeRoutine = (id) =>{
        const newExercise = JSON.parse(JSON.stringify(state));
        newExercise.days1=(newExercise.days1).filter(exercise => exercise.id!==id);
        newExercise.days2=(newExercise.days2).filter(exercise => exercise.id!==id);
        newExercise.days3= (newExercise.days3).filter(exercise => exercise.id!==id);
        
        setState(newExercise)
      
    }
    // //update wokrout

    const updateSelectedRoutine = (chosen) =>{
        switch(chosen){
            case "day1":
                setSelectedRoutine({day:'day1'})
                break;
            case "day2":
                    setSelectedRoutine({day:'day2'})
                break;
            case "day3":
                    setSelectedRoutine({day:'day3'})
                break;
        default:
            alert('Choose');
        }
    }

    const addToDay = (exercise) =>{
    const newExercise = JSON.parse(JSON.stringify(state));
    const copyExercise = {...exercise}
    copyExercise.id=uuid();
    switch(selectedRoutine.day){
        case "day1":      
             newExercise.days1=[...newExercise.days1,copyExercise]
             setState(newExercise)
            break;
        case "day2":
            newExercise.days2=[...newExercise.days2,copyExercise]
            setState(newExercise)
            break;
        case "day3":
                newExercise.days3=[...newExercise.days3,copyExercise]
                setState(newExercise)
            break;
        default:
            alert("error");
    }
}


    //use filter to remove days
        return(
            <BuildWorkoutContext.Provider value={{state,setState,addExercise,removeExercise,removeRoutine,updateSelectedRoutine,updateExercise,addToDay}}>
                {children}
            </BuildWorkoutContext.Provider>
        )
}

//this.props.children is the other file. they become the children