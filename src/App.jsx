/**
 * TODO:
 * Refactor this so that it only holds the CardDeck component
 * The CardDeck component in turn will be responsible
 * for holding and rendering the individuals cards
 */
import React from "react";
//import Cards from "./Cards";
import CardDeck from "./components/CardDeck";
const flashCards =[
  {
    id:1,
    front:"question1",
    back:"answer1"
  },
  {
    id:2,
    front:"question2",
    back:"answer2"
  },
  {
    id:3,
    front:"question3",
    back:"answer3"
  }
]
function App() {
  

  return (
    <div>
      {/*This component will be in charge of rendering the deck of flash cards */}
     <CardDeck cards={flashCards}/>
    </div>
  )
}

export default App
