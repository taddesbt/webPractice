import { Component } from "react";

export default class VowelCounter extends Component {


    state = { word: '', result: '' }

    handleClick = () => {

        // const Vowels = ['a', 'e', 'i', 'o', 'u'];
       

        let output = [...this.state.word].reduce((acc, letter) => {

        //   const total = Vowels.includes(letter) ? acc + 1 : acc;


        const total = letter.match(/([a,e,i,o,u])/) ? acc + 1 : acc;
             return total;

        }, 0);

        this.setState({ result: output })

    }


    render() {
        return (

            <section className="main">
                <div className="pal">
                    <input value={this.state.word} onChange={(e) => this.setState({ word: e.target.value })} type="text" className="input-text" placeholder="Enter a word..." />
                    <button onClick={this.handleClick} className="btn">Check</button>
                    <p className="result">{this.state.result}</p>
                </div>
            </section>

        )
    }
}