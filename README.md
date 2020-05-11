# Purpose
This application was developed to be a useful tool for me at the gym and to further develop skills in ReactJS. I chose to create a Gym app because it allows me to start off with the basics of React and as I progress and learn, I will be able to further improve the application. The idea is also verstaile in that, it would be something I would use on a daily basis. Also, it allows me to further dive into ui design, databases, and responsiveness.

# Inspiration
In the gym, there are multiple variables to keep track of if you want to maximize growth. Personally, I enjoy training with low rest times. This allows me to be more efficient with my time and also fatigue the muscle better. It is also important to progressive overload, which means to increase weight as you get stronger. With that being said, this application will track your rest time per set of an exercise and log weights like in any other application. Aside from logging rest time, what makes this unique is that, users will have the ability to enter in a YouTube video of an exercise they found useful to them and view it via the app. YouTube was a very valuable asset to my training when i was a beginner.

# Progress
V2:https://youtu.be/MkQFyfrOkhY
V1:https://www.youtube.com/watch?v=gTCjkpHK4UE&feature=youtu.be

# What I've learned/Improved
* React Hooks(useContext,useState, useEffect)
* Providers(Context API)
* Routers(BrowseRouter)
* Material UI
* Ternary Operators
* FireBase, working with JSON
* Objects/Arrays
* Dynamic variable naming

# Problems i've ran into
* Working with objects/arrays were very confusing Solution: console.log()
* Data not loading fast enough. Solution: Use ternary operators to displaying "loading..."
* Callback functions with event Solution: e=>onChange() ES6 bindings
* Prop drilling. Solution: Context API
* More

#Database
* Document>
{
  days1:[{exerciseName:",id:"",idealReps:"",idealSets:"",optionalYoutubeUrl:"",restTime:"",type:""}]....
  days2:[{exerciseName:",id:"",idealReps:"",idealSets:"",optionalYoutubeUrl:"",restTime:"",type:""}]....
  days3:[{exerciseName:",id:"",idealReps:"",idealSets:"",optionalYoutubeUrl:"",restTime:"",type:""}]....
  exercises:[{exerciseName:",id:"",idealReps:"",idealSets:"",optionalYoutubeUrl:"",restTime:"",type:""}]....
}
* Document>
{
  d[date]:[{day:"",exerciseName:"",finishedRep:"",restTime:""}].....
  d[date]:[{day:"",exerciseName:"",finishedRep:"",restTime:""}].....
}

# Work Flow
# Build the workout routines
* User navigates to /buildworkout from root page
* Using add form, user will add their workouts, including inputs: Exercise Names, Reps, Sets, Youtube Videos, Muscle group
* Click a day, and start adding exercises to the routines
# At the gym
* Navigate to /workout
* Choose the day of routine
* Complete the workout
* Start the rest timer
* Press next set 

# To be improved/added
* Updating edit information
* Deployment
* Authorization
* Mobile responsiveness
* Error handling
* More features for workout side

