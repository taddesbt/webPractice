import './intConDetector.css'
import { useState } from 'react'
import { useEffect, useRef } from 'react'

export const IntConDetector = () => {

    const [link, setLink] = useState();
    const [status, setStatus]= useState('Pending');
    const bgColor = useRef()

    const getConnection = async () => {
        try {
            const fetchResult = await fetch('https://upload.wikimedia.org/wikipedia/en/thumb/7/7d/Lenna_%28test_image%29.png/440px-Lenna_%28test_image%29.png?time=' + (new Date()).getTime());
            setLink("./images/online.png")

            setColor();
            setStatus("Online")
            return fetchResult.status >= 200 && fetchResult.status < 300;
        } catch (error) {
            console.error(error);
            setStatus("OOPS!!! Your Internet Connection is Down.");
            setLink("./images/offline.png");
            bgColor.classList.remove("online");
        }
    }

    function setColor() {
        bgColor.current.classList.add("online");
    }

    useEffect(() => {
        getConnection();
    }, [])

    return (<section id="main" ref={bgColor}>
        <div className="container">
            <img id="image" src={link} />
            <h1>Internet Connection Status</h1>
            <p className="status" id="status">{status}</p>
        </div>
    </section>)

}