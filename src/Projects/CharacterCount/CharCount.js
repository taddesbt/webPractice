import './charChar.css'

import React, { useState } from 'react'

export const CharCount = () => {

    const [input, setInput] = useState('')
    const[ count, setCount] = useState(0)
// const handleKey = ()=> {

//     setCount(input.length)
// }

    return (
        <div className="container">
            <div className="counter-div">
                <h1>Input Character Count</h1>
                <span className="count hex">{count}</span>
                <hr />
                <div className="buttons">
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyUp = {()=> {setCount(input.length)}}
                        
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Type here"
                    />
                </div>
            </div>
        </div>


    )

}