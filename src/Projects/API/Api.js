
import 'bootstrap/dist/css/bootstrap.css';
import { useRef } from 'react';

export default function Api() {

    const posR = useRef()

    const handleClick = () => {

        navigator.geolocation.getCurrentPosition(showpositions)
    }

    function showpositions(position) {

        console.log(posR.current.textContent)
        posR.current.textContent = ` Latitude: ${position.coords.latitude} <br/>
        Longitude: ${position.coords.longitude}`

    }


    return (<div className="container">
        <div className="row pt-5">
            <div className="col-md-4 mx-auto">
                <button onClick={handleClick} className="btn btn-lg btn-primary">Get Location</button>
                <hr />

                <h2  ref= {posR} className="location">
                   Location
                </h2>
            </div>
        </div>
    </div>)

}