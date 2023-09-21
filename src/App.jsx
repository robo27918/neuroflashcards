/**
 * Refactoring this so that it only holds the Cards component
 * The cards component in turn will be responsible
 * for holding and rendering the individuals cards
 */
import React from "react";
import Cards from "./Cards";

function App() {
  

  return (
    <div>
      {/*This component will be in charge of rendering the deck of flash cards */}
      <Cards /> 
    </div>
  )
}

export default App
