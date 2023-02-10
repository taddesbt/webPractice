
import { Component } from "react"
import './RandomNGen.css'


export default class RandomNGen extends Component {

    state = {
        count: 0
    }

    handleClick = () => {

        const randomNumber = Math.floor(Math.random() * 10 + 1);
        this.setState({ count: randomNumber });
    }





    render() {
        return (<>




            <div className="container">
                <div className="counter-div">
                    <h1>Random Number Generator</h1>
                    <span className="count number">{this.state.count}</span>
                    <hr />
                    <div className="buttons">
                        <button className="reset generate" onClick={this.handleClick}>
                            <i className="fas fa-spinner"></i>
                            Generate
                        </button>
                    </div>
                </div>
            </div>
        </>


        )
    }
}