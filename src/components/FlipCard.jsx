import React,{useState} from "react";
import ReactCardFlip from "react-card-flip"

/**
 * This flipCard will be used to contain both the 
 * front question and the back answer and this
 * data will be passed into this component 
 * as text props 
 * 
 */

const FlipCard = ({frontData, backData}) =>{
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () =>{
        setIsFlipped((prevIsFlipped) => !prevIsFlipped) 
    };
    return(
        <div className="card">
        <ReactCardFlip 
            isFlipped={isFlipped}
            flipDirection={"horizontal"}
        >
            <div>
                {frontData}
                <div className="answerButton">
                    <button
                        onClick={handleFlip}
                    >See answer</button>
                </div>
            </div>

            <div>
                
                {backData}
                <div className="questionButton">
                    <button
                        onClick={handleFlip}
                    >See Question</button>
                </div>
                
            </div>
        </ReactCardFlip>
        </div>

    );
}
export default FlipCard;