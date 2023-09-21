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
        <ReactCardFlip 
            isFlipped={isFlipped}
            flipDirection={"horizontal"}
        >
            <div>
                {frontData}
                <button
                    className="FlipButton" onClick={handleFlip}
                >See answer</button>
            </div>

            <div>
                {}
                {backData}
                <button className="FlipButton" onClick={handleFlip}>See Question</button>
            </div>
        </ReactCardFlip>

    );
}
export default FlipCard;