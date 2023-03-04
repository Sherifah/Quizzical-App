import React, {useState, useEffect} from "react";
import Intro from "./Components/Intro";
import Questions from "./Components/Questions";
import {nanoid} from 'nanoid'

function App() {

  const [quizStart, setQuizStart] = useState(false)

  function handleStart() {
    setQuizStart(true)
  }

  return (
    <div className="quizzical">
      {quizStart ? 
        <Questions /> : 
        <Intro handleStart={handleStart} />}
    </div>
  )
}

export default App;
