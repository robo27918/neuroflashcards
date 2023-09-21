/**
 * Refactoring this so that it only holds the Cards component
 * The cards component in turn will be responsible
 * for holding and rendering the individuals cards
 */

import { useState } from 'react'
import './App.css'
import Question from './components/Question'
import FlipCard from './components/FlipCard'
import Answer from './components/Answer'
function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <FlipCard 
      front = {<Question question={"This is the question"}/>}
      back ={<Answer answer={"this is the answer"}/>}
    />

        
  
   </div>
  )
}

export default App
