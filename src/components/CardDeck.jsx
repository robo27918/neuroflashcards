/**
 * This is the deck to contain multiple
 * flip card components
 * 
 * for now the data will simply be held in an object called dummyData within 
 * this file, but later on we want to change this....
 */
import React, {useState, useEffect} from "react";
import FlipCard from "./FlipCard";
import "../FlipCards.css"
const CardDeck = ({cards}) =>{
    // the setCardData method will be handy later when we request data from an actual server...
    const [cardData, setCardData] = useState (cards);
    
    //setting the cardData passed in via props
    //
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
        setCurrent(current -1)
    }
    const nextCard = () => {
        setCurrent(current +1);
    }

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

        </div>
    );
}
export default CardDeck;