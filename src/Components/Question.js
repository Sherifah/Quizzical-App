import React, {useState} from "react";

function Question(props) {

    const [question, setQuestion] = useState({
        question: "",
        answers: ""
    })

    return(
        <div>
                <div className='question'>{props.question}</div>
                <div className='options'>
                    <button className='selected'>{props.answer}</button>
                    <button className='unselected'>{props.answer}</button>
                    <button className='selected'>{props.answer}</button>
                    <button className='selected'>{props.answer}</button>
                </div>
                <div className='divider'></div>
            </div>
    )
}

export default Question;
