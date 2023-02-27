import React, {useState, useEffect} from 'react'
import Question from './Question'

function Questions() {

    const [questions, setQuestions] = useState([])
  
    useEffect(() => {
      fetch("https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple")
      .then((res) => res.json())
      .then((data) => setQuestions(data.results))
    }, [])


    const questionList = questions.map((item) => {
    return (
      <Question
        question= {item.question}
        answer= {item.correct_answer}
         />
    ) 
  })

    return (
        <main className='questions'>
            {questionList}
            <button
                className='submit-btn'
                
            >
                Check Answers
            </button>
        </main>
    )
}

export default Questions;
