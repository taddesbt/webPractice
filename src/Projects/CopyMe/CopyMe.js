
import React, { useState, useRef } from "react";

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './copyme.css'

export const CopyMe = () => {

    const [input, setInput] = useState('ZinoTrust')
    const inputRef = useRef()

    const handleClick = (e) => {
        e.preventDefault();
        inputRef.current.select()

        inputRef.current.setSelectionRange(0, 999999);
        document.execCommand('copy')
        e.target.textContent = 'Copiedd';
        setTimeout(() => {
            e.target.textContent = 'Copy';
        }, 3000)


    }

    return (<>

        <div className="container">

            <div className="row justify-content-center align-items-center box">
                <div className="col-md-6">
                    <h4 className="text-white pb-2">Get 25% Discount with this coupon</h4>
                    <form action="" className="d-flex">
                        <input
                            ref={inputRef}
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            type="text"
                            className="form-control form-control-lg me-2 text-center coupon"

                        />
                        <button onClick={handleClick} className="btn btn-outline-light">Copy</button>
                    </form>
                </div>


            </div>
        </div>

    </>



    )
}
