import React, { useState } from 'react'
import './search.css'

const countries = [{ name: 'USA' }, { name: 'Nigeria' }, { name: 'China' }, { name: 'Japan' }, { name: 'Australia' }, { name: 'South Africa' }, { name: 'Gambia' }]


export default function Search() {

    const [input, setInput] = useState('')

    const [data, setData] = useState(countries)



    const searchInput = (e) => {

        const newCountries = countries.filter((country) => {

            return (country.name.toLowerCase().includes(e.target.value.toLowerCase()))
        })

        setData(newCountries)
        
        console.log("key is up")
    }

    const ListItems = (country) => {

        return (
            <li>{country.name} </li>

        )
    }

    return (
        <div className="container">
            <input onKeyUp={searchInput}  type="text" id="search" placeholder="Search a country..." autoComplete="off" />

            <ul id="list">
                {data.map((country, index) => {

                    return (<ListItems key={index} {...country} />)
                })

                }
            </ul>
        </div>
    )
}
