import React,{useState} from "react";
import ReactCardFlip from "react-card-flip"

/**
 * This is the card to hold the front (question)
 * and the back answer for the f
 * 
 * Also, these cards will be contained in another container
 * that will allow the user to go forward and backward 
 * to see the different set of cards
 */

const FlipCard = ({front, back}) =>{
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
                {front}
                <button
                    className="FlipButton" onClick={handleFlip}
                >See answer</button>
            </div>

            <div>
                {back}
                <button className="FlipButton" onClick={handleFlip}>See Question</button>
            </div>
        </ReactCardFlip>

    );
}
export default FlipCard;