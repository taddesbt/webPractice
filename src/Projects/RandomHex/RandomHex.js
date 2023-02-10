import { Component } from "react";


export default class RandomHex extends Component {

state = {
  hex: '#ffffff'
}
  handleClick = ()=> {

    const randomColor = Math.random().toString(16).substring(2, 8);
    document.body.style.backgroundColor = "#" + randomColor;

    this.setState({hex: "#" + randomColor})


  }

    render(){

        return (<>
              <div className="container">
      <div className="counter-div">
        <h1>Random Hex Color Generator</h1>
        <span className="count hex">{this.state.hex}</span>
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