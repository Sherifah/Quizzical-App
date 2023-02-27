import React, {useState, useEffect} from "react";
import Intro from "./Components/Intro";
import Questions from "./Components/Questions";
import {nanoid} from 'nanoid'

function App() {

  return (
    <div>
      <Questions />
    </div>
  )
}

export default App;
