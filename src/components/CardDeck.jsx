/**
 * This is the deck to contain multiple
 * flip card components
 * 
 * for now the data will simply be held in an object called dummyData within 
 * this file, but later on we want to change this....
 */
import React, {useState, useEffect} from "react";
import FlipCard from "./FlipCard";
import GuessForm from "./GuessForm";
import "./Flipcards.css"
const CardDeck = ({cards}) =>{
    // the setCardData method will be handy later when we request data from an actual server...
    const [cardData, setCardData] = useState (cards);
    // need a variable to hold the correct answer (ie. backside)
    const[correctBackside, setBackside] = useState('');
    
    //variable to wait for users textfield guess and then change color accordingly
    const[userGuess, setUserGuess] = useState("wait");
    console.log("printing cardData", cardData)
    
    const Fcards = cardData.map((card) => {
        return <FlipCard 
                frontData={card.front} 
                backData={card.back} 
                key ={card.id}/>
    });

    //navigation for cards
    const [current, setCurrent] = useState(0);
    const  previousCard = ()=>{
        if (current > 0){
            setCurrent(current -1)
        }
    }
    const nextCard = () => {
        if (current < Fcards.length-1){
            setCurrent(current +1);
        }
    }
    //function to check if textfield guess is correct
    
    console.log("print Fcards", Fcards)
    return (
        <div>
            {/* card number */}
            <div className="cardNumber">
                Card {current+1} of {Fcards.length}
            </div>
            {/* card number */}

            {/*render the cards */}
                {Fcards[current]}
            {/*render the cards */}

            {/*render navigation*/}
            <div className="nav">
                <button onClick={previousCard}>Previous card</button>
                <button onClick={nextCard}>Next Card</button>

            </div>
            {/*render navigation*/}
           
           {/*render guess form*/}
            <GuessForm guess={"wait"} correctAnswer={cardData[current].back}/>
           {/*end of render guess form*/}
        </div>
    );
}
export default CardDeck;