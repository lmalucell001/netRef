import { useEffect } from "react";
import React from "react";

/*class Capture extends React.Component{
    onClick(e){
        console.log("ON CLICK, clientX:", e.clientX);
    }

    onMouseDown(e){
        console.log("on mousedown, clientY:", e.clientY);
    }
    render(){
        return(
            <div style={{width: 300, height: 300, backgroundColor:'red'}}
                onClick={this.onClick}
                onMouseDown={this.onMouseDown}
            />
        )
    }
}

export default Capture;*/

class Test extends React.Component {
    constructor(){
        super();

        this.state = {
           black: true
        }
    }

    changeColor(){
       this.setState({black: !this.state.black})
       console.log("changement")
    }

    render(){
        let btn_class = this.state.black ? "blackButton" : "whiteButton";

        return (
             <button className={btn_class} onClick={this.changeColor.bind(this)}>
                  Button!
             </button>
        )
    }
}
export default Test;