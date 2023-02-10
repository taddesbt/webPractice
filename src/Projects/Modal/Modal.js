
import { Component } from "react"
import './modal.css'

export default class Modal extends Component {

    state = {
        modal: false

    }

    handleclick = (e) => {
        e.preventDefault()
        this.setState({modal: !this.state.modal})

    }

    render() {

        const block = this.state.modal ? 'block' : ''

        return (
            <div>
                <header>
                    <h1><span>Lets</span> Create a Modal!!!</h1>
                    <p>Click Button Below</p>
                </header>

                <section>
                    <div>
                        <form action="">
                            <button onClick={this.handleclick} id="btn" className="btn">TEST POPUP</button>
                        </form>
                    </div>
                </section>

                <div style={{ display: block }} className="modal" id="modal">
                    <div className="modal-content">
                        <span onClick = {this.handleclick} className="close">&times;</span>
                        <h1>Hello World!!!</h1>
                        <hr />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. A repudiandae
                            ad repellendus totam mollitia quam voluptatibus odit quos corrupti,
                            quas sed illum ab tenetur fuga asperiores, quae ipsum dicta minima.
                            Dicta assumenda error esse ut, accusamus commodi quo aperiam quam ea
                            alias nobis unde laborum similique deserunt, dolore vel. Magnam.
                        </p>
                    </div>
                </div>

            </div>
        )
    }

}