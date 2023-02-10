import React, { useState } from 'react'
// import './quoteGenerator.css'


const URL = "https://type.fit/api/quotes";
//  FUNCTION TO SHUFFLE QUOTES



export default function QuoteGenerator() {

    const [number, setNumber] = useState(0)
    const [dataQ, setDataQ] = useState([])

    const getQuotes = (e) => {
        e.preventDefault();
        if (number === '') { alert('You must pass a number') }
        else {


            fetch(URL)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {

                  
                    data.length = number;
                    setDataQ(data)

                })



        }
    }
    const ListItems = (dat) => {

        return (<>

            <li>Quote: {dat.text}</li>
            <li>Author: {dat.author}</li>
            <hr />

        </>)


    }




    return (
        <div className="container">
            <h2>Quotes Generator</h2>
            <form onSubmit={getQuotes}>
                <div>
                    <label htmlFor="number">Number of Quotes</label>
                    <input onChange={(e) => setNumber(e.target.value)} value={number} type="number" id="number" />
                </div>
                <button className="get-quotes">Get Quotes</button>
            </form>
            <hr />


            {(!!dataQ.length) &&

            ( <ul className="quotes">
                {dataQ.map((dat, index) => {
                    return (<ListItems key={index} index {...dat} number />)
                })
                }
            </ul>)}


        </div>

    )

}

