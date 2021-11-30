import React, {Component} from "react"

class Classclick extends Component {

    clickHandler(){
        console.log('clicked button');
        return(
            <div>
                <h1>BONJOIUR</h1>
            </div>
        )
    }

    render(){
        return(
            <div>
                <button onClick={this.clickHandler}>Click me</button>
            </div>
        )
    }
}

export default Classclick