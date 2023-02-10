import React, {useState} from 'react'
import { useEffect } from 'react'
import './WeatherApp.css'

const api = {
    key: "28fd15358cdecbc1a1dfef367e71acef",
    base: "https://api.openweathermap.org/data/2.5/"
}
const iconURL = "http://openweathermap.org/img/w/";

export default function WeatherApp() {

const [search, setSearch] = useState('')
const[ data, setData ] = useState({})
const[loading, setLoading] = useState('true')

function dateFunction (d) {
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day}, ${date} ${month} ${year}`;
}


const getData=(srch)=> {
   

    fetch(`${api.base}weather?q=${srch}&units=metric&appid=${api.key}`)
    .then(response => {
        return response.json();
    }).then((data)=> {
       
        setLoading(false)
        setData(data)
    });


}

const handleSubmit=(e)=> {
e.preventDefault()
getData(search)


}

useEffect(()=> {
getData('toronto')

},[] )

  return (
    <div className="main-container">
    <div className="container top">
        <h1>Weather App</h1>
        <form action="" onSubmit={handleSubmit}>
            <input value ={search} onChange={e=>setSearch(e.target.value)} type="text" className="search" placeholder="Search by city name"/>
            <button type="submit" className="btn">Submit</button>
            <p className="error"></p>
        </form>

      { (loading) ? (<h1> ...Loading </h1>) : 
     
      ( <section>
            <div className="container">
                <div className="icon">
                    <img src={`${iconURL}${data.weather[0].icon}.png`} alt="" className="weather-icon"/>
                </div>
                <div className="location">
                    <div className="city">{data.name}, {data.sys.country}</div>
                    <div className="date">{dateFunction(new Date())}</div>
                </div>
                <div className="current">
                    <div className="temp">Temp: {Math.round(data.main.temp)} <span>°C</span></div>
                    <div className="weather">Weather: {data.weather[0].main}</div>
                    <div className="temp-range">Temp Range: {Math.round(data.main.temp_min)}°C / {Math.round(data.main.temp_max)}°C</div>
                </div>
            </div>
        </section>)
      
      
      
       }


    </div>
</div>
  )
}



