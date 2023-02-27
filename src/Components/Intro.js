import React from 'react'
import Questions from './Questions';

function Intro(props) {

    return (
        <main className='intro-page'>
            
            <h1 className='app-title'>Quizzical</h1>
            <p className='app-description'>Some description if needed</p>
            <button 
                className='start-btn'
                onClick={props.handleClick}
                
            >
                Start Quiz
            </button>
            
        </main>
    )
}

export default Intro;
