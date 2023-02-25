import React from 'react'

function Questions() {
    return (
        <main className='questions'>
            <div>
                <div className='question'>How would one say goodbye in Spanish?</div>
                <div className='options'>
                    <button className='selected'>Adiós</button>
                    <button className='unselected'>Hola</button>
                    <button className='selected'>Au Revoir</button>
                    <button className='selected'>Salir</button>
                </div>
                <div className='divider'></div>
            </div>
            
        </main>
    )
}

export default Questions;
