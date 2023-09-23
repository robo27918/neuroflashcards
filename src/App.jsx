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

// importing routing tools for page navigationn
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  

  return (
    <div>
      {/*This component will be in charge of rendering the deck of flash cards */}
     <CardDeck cards={brainAnatomyFlashcards}/>
    </div>
  )
}

export default App
