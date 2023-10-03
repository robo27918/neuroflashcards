import React, {useState} from "react";

//this component will be used to store the Form for determining
//if the users guess is correct or not

const GuessForm = ({guess,correctAnswer}) =>{
    const[value, setValue] = useState('');
    const[userGuess,setUserGuess] = useState(guess) // the prop will be passed in as wait..
    const handleChange = (event)=>{
        setValue(event.target.value);
        console.log(value);
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log("printing the correct Answer prop", correctAnswer)
        if (value.toLowerCase() == correctAnswer.toLowerCase()){
            setUserGuess('right')
            alert("That is correct !")
        }
        else{
            setUserGuess('wrong')
            alert("So wrong!")
        }
    }

    return(
    <div className="form-container">
    
        
        <form onSubmit={handleSubmit}>
           <label className="form label">
                <h3>Enter your guess:</h3>
                <input id={userGuess} type="text" value={value} onChange={handleChange}></input>
           </label>
           <input type="submit" value="Submit Guess"></input>
        </form>
    </div>
    );
}
export default GuessForm;