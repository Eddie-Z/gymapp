import React, {createContext,useState, useEffect,} from 'react';

import uuid from 'uuid/v4'
import firebase from '../firebase'
export const BuildWorkoutContext = createContext();

export function BuildWorkoutContextProvider({children}){

    //states

    const [exercises,setExercises] = useState({});
    const [editingExercise,setEditingExercise] = useState();
    const [editingExerciseID,setEditingExerciseID] = useState();
    const [editToggle, setEditToggle] = useState(true);
    const [buildToggle,setBuildToggle]=useState(true);
    const [selectedDay,setSelectedDay] = useState("")
    const [monday,setMonday] = useState({})
    const [tuesday,setTuesday] = useState({})
    const [wednesday,setWednesday] = useState({})
    const [thursday,setThursday] = useState({})
    const [friday,setFriday] = useState({})
    const [saturday,setSaturday] = useState({})
    const [sunday,setSunday] = useState({})

    const [exerciseIndex,setExerciseIndex] = useState(0);
 
     //lifecycle

     useEffect(()=>{
          console.log("yo")  
          switch(selectedDay){
               case "MON":    
          
                    var docRef = firebase.firestore().collection("test").doc("monday");
                    // Valid options for source are 'server', 'cache', or
                    // 'default'. See https://firebase.google.com/docs/reference/js/firebase.firestore.GetOptions
                    // for more information.
          
                    // Get a document, forcing the SDK to fetch from the offline cache.
                    docRef.get().then(function(doc) {
                    // Document was found in the cache. If no cached document exists,
                    // an error will be returned to the 'catch' block below.
                    console.log("Cached document data:", doc.data().newMonday);
                    setMonday(doc.data().newMonday);
                    }).catch(function(error) {
                    console.log("Error getting cached document:", error);
                    });
                         
               break;
               case "TU":  
                    var docRef = firebase.firestore().collection("test").doc("tuesday");
                    // Valid options for source are 'server', 'cache', or
                    // 'default'. See https://firebase.google.com/docs/reference/js/firebase.firestore.GetOptions
                    // for more information.
          
                    // Get a document, forcing the SDK to fetch from the offline cache.
                    docRef.get().then(function(doc) {
                    // Document was found in the cache. If no cached document exists,
                    // an error will be returned to the 'catch' block below.
                    console.log("Cached document data:", doc.data().newTuesday);
                    setTuesday(doc.data().newTuesday);
                    }).catch(function(error) {
                    console.log("Error getting cached document:", error);
                    });
                     
                         
               break;
               case "WED":
                    var docRef = firebase.firestore().collection("test").doc("wednesday");
                    // Valid options for source are 'server', 'cache', or
                    // 'default'. See https://firebase.google.com/docs/reference/js/firebase.firestore.GetOptions
                    // for more information.
          
                    // Get a document, forcing the SDK to fetch from the offline cache.
                    docRef.get().then(function(doc) {
                    // Document was found in the cache. If no cached document exists,
                    // an error will be returned to the 'catch' block below.
                    console.log("Cached document data:", doc.data().newWednesday);
                    setWednesday(doc.data().newWednesday);
                    }).catch(function(error) {
                    console.log("Error getting cached document:", error);
                    });
                        
                         
               break;
               case "THU":  
                    var docRef = firebase.firestore().collection("test").doc("thursday");
                    // Valid options for source are 'server', 'cache', or
                    // 'default'. See https://firebase.google.com/docs/reference/js/firebase.firestore.GetOptions
                    // for more information.
          
                    // Get a document, forcing the SDK to fetch from the offline cache.
                    docRef.get().then(function(doc) {
                    // Document was found in the cache. If no cached document exists,
                    // an error will be returned to the 'catch' block below.
                    console.log("Cached document data:", doc.data().newThursday);
                    setThursday(doc.data().newThursday);
                    }).catch(function(error) {
                    console.log("Error getting cached document:", error);
                    });
                     
                         
               break;
               case "FRI":   
                    var docRef = firebase.firestore().collection("test").doc("friday");
                    // Valid options for source are 'server', 'cache', or
                    // 'default'. See https://firebase.google.com/docs/reference/js/firebase.firestore.GetOptions
                    // for more information.
          
                    // Get a document, forcing the SDK to fetch from the offline cache.
                    docRef.get().then(function(doc) {
                    // Document was found in the cache. If no cached document exists,
                    // an error will be returned to the 'catch' block below.
                    console.log("Cached document data:", doc.data().newFriday);
                    setFriday(doc.data().newFriday);
                    }).catch(function(error) {
                    console.log("Error getting cached document:", error);
                    });
                        
               break;
               case "SAT":   
                    var docRef = firebase.firestore().collection("test").doc("saturday");
                    // Valid options for source are 'server', 'cache', or
                    // 'default'. See https://firebase.google.com/docs/reference/js/firebase.firestore.GetOptions
                    // for more information.
          
                    // Get a document, forcing the SDK to fetch from the offline cache.
                    docRef.get().then(function(doc) {
                    // Document was found in the cache. If no cached document exists,
                    // an error will be returned to the 'catch' block below.
                    console.log("Cached document data:", doc.data().newSaturday);
                    setSaturday(doc.data().newSaturday);
                    }).catch(function(error) {
                    console.log("Error getting cached document:", error);
                    });
                   
                     
               break;
               case "SUN":   
                    var docRef = firebase.firestore().collection("test").doc("sunday");
                    // Valid options for source are 'server', 'cache', or
                    // 'default'. See https://firebase.google.com/docs/reference/js/firebase.firestore.GetOptions
                    // for more information.
          
                    // Get a document, forcing the SDK to fetch from the offline cache.
                    docRef.get().then(function(doc) {
                    // Document was found in the cache. If no cached document exists,
                    // an error will be returned to the 'catch' block below.
                    console.log("Cached document data:", doc.data().newSunday);
                    setSunday(doc.data().newSunday);
                    }).catch(function(error) {
                    console.log("Error getting cached document:", error);
                    });
                  
                         
               break;
            }


     },[selectedDay]);


    //modify

    const editUrl = (url) => {
          //https://www.youtube.com/watch?v=njnhAyENKio
          //https://www.youtube.com/embed/njnhAyENKio
          //https://www.youtube.com/embed/njnhAyENKio?start=91 time stamp
          //https://youtu.be/Sn3tld11OFA?t=120
          //https://www.youtube.com/embed/Sn3tld11OFA?start=60
          //https://youtu.be/Sn3tld11OFA?t=60
          
          if(url.search("youtu.be")!=-1){
               const embedUrl = url.replace("https://youtu.be/","https://www.youtube.com/embed/").replace("?t=","?start=");
              // debugger
               return embedUrl;
            
          }
          else{
             
               const embedUrl = url.replace("watch?v=","embed/")
               const posOfUrl = embedUrl.indexOf("&ab_channel")
               const newUrl = embedUrl.slice(0,posOfUrl)
               console.log(newUrl)
              // debugger
               return newUrl;
           
          }
       
          
    }

     const updateExercise = (id,updateExercise) => {
          //copy of exercise
          const newExercises = {...exercises};
          //update 
          newExercises[id] = updateExercise;
          //set state
          setExercises(exercises);
          

     }

    const addExercise = (exerciseName,idealSets,idealReps,restTime,optionYoutubeUrl,muscleCategory) => {
        const newExercise= {
            exerciseName: exerciseName,
            idealSets: idealSets,
            idealReps:idealReps,
            restTime: restTime,
            optionYoutubeUrl: optionYoutubeUrl,
            muscleCategory:muscleCategory
         }
        // console.log(exercises);
         //copy of existing state
         const newExercises = {...exercises};
         const id =`exercises${Date.now()}`
         //add new exercise to exerises;
         newExercises[id] = newExercise;
         //set exercises to exercise
         setExercises(newExercises);

         console.log(newExercises);

         //firebase
         firebase.firestore().collection('test').doc('test2').set({
          newExercises})
           //get
           firebase.firestore().collection('test').onSnapshot((snapshot)=>{
                const test =snapshot.docs.map((doc) => ({
                     
                     ...doc.data()
                }))
                //console.log(test[0].newExercises);
              
           })
     
         
    }

//     // //delete
     const removeExercise = (id) =>{
          console.log(id);
          //take copy of exercise
          const newExercises = {...exercises};
          //delete
          delete newExercises[id];
          //reset state
          setExercises(newExercises);


               //firebase
         firebase.firestore().collection('test').doc('test2').set({
          newExercises})

//         const newExercise = JSON.parse(JSON.stringify(state));
//         newExercise.exercise =newExercise.exercise.filter(exercise => exercise.id !== id);
//         setState(newExercise)
//         const db = firebase.firestore();
//         db.collection("spells").doc("0").set(newExercise);
     }

//     //delete routine
     const removeRoutineExercise = (id) =>{

          switch(selectedDay){
               case "MON":      
                         const newMonday = {...monday};
                         //delete
                         delete newMonday[id];
                         //reset state
                         setMonday(newMonday);
     
                         firebase.firestore().collection('test').doc('monday').set({newMonday})
                         
               break;
               case "TU":  
                       //take copy of exercise
                       const newTuesday = {...tuesday};
                       //delete
                       delete newTuesday[id];
                       //reset state
                       setTuesday(newTuesday);   
                       firebase.firestore().collection('test').doc('tuesday').set({newTuesday}) 
                         
               break;
               case "WED":
                            //take copy of exercise
                            const newWednesday = {...wednesday};
                            //delete
                            delete newWednesday[id];
                            //reset state
                            setWednesday(newWednesday);      
                            firebase.firestore().collection('test').doc('wednesday').set({newWednesday}) 
                         
               break;
               case "THU":     
                       //take copy of exercise
                       const newThursday = {...thursday};
                       //delete
                       delete newThursday[id];
                       //reset state
                       setThursday(newThursday); 
                       firebase.firestore().collection('test').doc('thursday').set({newThursday}) 
                         
               break;
               case "FRI":      
                       //take copy of exercise
                       const newFriday = {...friday};
                       //delete
                       delete newFriday[id];
                       //reset state
                       setFriday(newFriday);
                       firebase.firestore().collection('test').doc('friday').set({newFriday}) 
                         
               break;
               case "SAT":    
                       //take copy of exercise
                       const newSaturday = {...saturday};
                       //delete
                       delete newSaturday[id];
                       //reset state
                       setSaturday(newSaturday);  
                       firebase.firestore().collection('test').doc('saturday').set({newSaturday})   
               break;
               case "SUN":   
                       //take copy of exercise
                       const newSunday = {...sunday};
                       //delete
                       delete newSunday[id];
                       //reset state
                       setSunday(newSunday); 
                       firebase.firestore().collection('test').doc('sunday').set({newSunday})    
                         
               break;
            }
      
     
      
     }
//     // //update wokrout

     const EditExercise = (id) =>{
          setEditToggle(false);
          setEditingExercise(exercises[id]);
          setEditingExerciseID(id);

     }

     const addUpdateExercise = (exerciseName,idealSets,idealReps,restTime,optionYoutubeUrl,muscleCategory) => {
         
          const newExercise= {
              exerciseName: exerciseName,
              idealSets: idealSets,
              idealReps:idealReps,
              restTime: restTime,
              optionYoutubeUrl: optionYoutubeUrl,
              muscleCategory:muscleCategory
           }
          // console.log(exercises);
           //copy of existing state
           const newExercises = {...exercises};
         
           //add new exercise to exerises;
           newExercises[editingExerciseID] = newExercise;


           //set exercises to exercise
           setExercises(newExercises);
  
   
  
           //firebase
           firebase.firestore().collection('test').doc('test2').set({
            newExercises})
             //get
             firebase.firestore().collection('test').onSnapshot((snapshot)=>{
                  const test =snapshot.docs.map((doc) => ({
                       
                       ...doc.data()
                  }))
                  //console.log(test[0].newExercises);
                
             })
             setEditToggle(true);
       
           
      }


     const addToRoutine = (id) =>{

       switch(selectedDay){
          case "MON":      
                    //take copy of exercise
                    const newMonday = {...monday};
                    //delete
                    newMonday[`exercise${Date.now()}`] =  exercises[id];
                    //reset state
                    setMonday(newMonday);

                    firebase.firestore().collection('test').doc('monday').set({newMonday})
                    
          break;
          case "TU":  
                  //take copy of exercise
                  const newTuesday = {...tuesday};
                  //delete
                  newTuesday[`exercise${Date.now()}`] =  exercises[id];
                  //reset state
                  setTuesday(newTuesday);   
                  firebase.firestore().collection('test').doc('tuesday').set({newTuesday}) 
                    
          break;
          case "WED":
                       //take copy of exercise
                       const newWednesday = {...wednesday};
                       //delete
                       newWednesday[`exercise${Date.now()}`] =  exercises[id];
                       //reset state
                       setWednesday(newWednesday);      
                       firebase.firestore().collection('test').doc('wednesday').set({newWednesday}) 
                    
          break;
          case "THU":     
                  //take copy of exercise
                  const newThursday = {...thursday};
                  //delete
                  newThursday[`exercise${Date.now()}`] =  exercises[id];
                  //reset state
                  setThursday(newThursday); 
                  firebase.firestore().collection('test').doc('thursday').set({newThursday}) 
                    
          break;
          case "FRI":      
                  //take copy of exercise
                  const newFriday = {...friday};
                  //delete
                  newFriday[`exercise${Date.now()}`] =  exercises[id];
                  //reset state
                  setFriday(newFriday);
                  firebase.firestore().collection('test').doc('friday').set({newFriday}) 
                    
          break;
          case "SAT":    
                  //take copy of exercise
                  const newSaturday = {...saturday};
                  //delete
                  newSaturday[`exercise${Date.now()}`] =  exercises[id];
                  //reset state
                  setSaturday(newSaturday);  
                  firebase.firestore().collection('test').doc('saturday').set({newSaturday})   
          break;
          case "SUN":   
                  //take copy of exercise
                  const newSunday = {...sunday};
                  //delete
                  newSunday[`exercise${Date.now()}`] =  exercises[id];
                  //reset state
                  setSunday(newSunday); 
                  firebase.firestore().collection('test').doc('sunday').set({newSunday})    
                    
          break;
       }

//     const newExercise = JSON.parse(JSON.stringify(state));
//     const copyExercise = {...exercise}
//     const db = firebase.firestore();
//     copyExercise.id=uuid();
//     switch(selectedRoutine.day){
//         case "day1":      
//              newExercise.days1=[...newExercise.days1,copyExercise]
//              setState(newExercise)       
//              db.collection("spells").doc("0").set(newExercise);
//             break;
//         case "day2":
//             newExercise.days2=[...newExercise.days2,copyExercise]
//             db.collection("spells").doc("0").set(newExercise);
//             setState(newExercise)
//             break;
//         case "day3":
//                 newExercise.days3=[...newExercise.days3,copyExercise]
//                 db.collection("spells").doc("0").set(newExercise);
//                 setState(newExercise)
//             break;
//         default:
//             alert("error");
 //    }
 }




    //use filter to remove days
        return(
            <BuildWorkoutContext.Provider value={{addUpdateExercise,editingExercise,setEditToggle,editToggle,EditExercise,removeRoutineExercise,exerciseIndex,setExerciseIndex,setBuildToggle,buildToggle,editUrl,exercises,setExercises,addExercise,removeExercise,updateExercise,addToRoutine,setSelectedDay,selectedDay,
               monday,tuesday,wednesday,thursday,friday,saturday,sunday,setMonday,setTuesday,setWednesday,setThursday,setFriday,setSaturday,setSunday
            
            }}>
                {children}
            </BuildWorkoutContext.Provider>
        )
}

//this.props.children is the other file. they become the children