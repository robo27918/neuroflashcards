/**
 * TODO:
 * Refactor this so that it only holds the CardDeck component
 * The CardDeck component in turn will be responsible
 * for holding and rendering the individuals cards
 */
import React from "react";
//import Cards from "./Cards";
import FlipCard from "./components/FlipCard";

function App() {
  

  return (
    <div>
      {/*This component will be in charge of rendering the deck of flash cards */}
      <FlipCard 
        frontData={"this is the front"}
        backData={"this is the back data"}
      /> 
    </div>
  )
}

export default App
