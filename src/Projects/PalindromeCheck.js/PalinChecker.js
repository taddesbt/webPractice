import { Component } from "react";
import './palinChecker.css'

export default class PalinChecker extends Component {

    state = { input: '', 
             output : ''
            }

    handleClick = ()=> {
        let word = this.state.input.toLowerCase();

this.setState({output: [...word].reverse().join('') === word ? `${word} is a palindrome` : `${word} is NOT a palindrome`}) 



    }


    render() {
        return (
            <section className="main">
                <div className="pal">
                    <input value ={this.state.input} onChange ={(e)=> this.setState({input : e.target.value})} type="text" className="input-text" placeholder="Enter a word..." />
                    <button onClick ={this.handleClick} className="btn">Check</button>
                    <p className="result"> {this.state.output && `${this.state.output}`} </p>
                </div>
            </section>
        )
    }
}

