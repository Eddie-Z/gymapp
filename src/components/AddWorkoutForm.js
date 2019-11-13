import React from 'react';

class AddWorkoutForm extends React.Component{
    render(){
        return(
            <form>
                <input placeholder="Exercise Name"/>
                <input placeholder="Ideals Sets"/>
                <input placeholder="Ideal Reps"/>
                <input placeholder="Rest Time"/>
                <select>
                    <option>Upper Body</option>
                    <option>Lower Body</option>
                    <option>Other</option>
                </select>

            </form>
        )
    }
}
export default AddWorkoutForm;