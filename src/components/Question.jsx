import React from "react";
/**
 *  this is the question card
 *  the props are simply the question 
 *  at the time it will only contain text data
 *  but maybe later it should be also compatible
 *  with image data to be able to hold questions 
 *  regarding brain structure
 */

const Question = (props) =>{
    return(
    <div className="Question">
        <h3>{props.question}</h3>

    </div>
    )
}
export default Question;