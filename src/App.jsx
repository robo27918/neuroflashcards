/**
 * TODO:
 * Refactor this so that it only holds the CardDeck component
 * The CardDeck component in turn will be responsible
 * for holding and rendering the individuals cards
 */
import React from "react";
import brainAnatomyFlashcards from "./cardData";
import CardDeck from "./components/CardDeck";
import "./App.css";



function App() {
  

  return (
    <div>
      <h1> Basic Brain Flashcards</h1>
      <h3>Test your knowledge of basic brain anatomy! Good luck</h3>
      {/*This component will be in charge of rendering the deck of flash cards */}
     <CardDeck cards={brainAnatomyFlashcards}/>
    </div>
  )
}

export default App
