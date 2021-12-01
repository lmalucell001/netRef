import React, { Component } from 'react';
import './ajoutBulles.css';
import './Bulle.css';
import Bulle from './bulle.js';


export default class AjoutBulles extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showBulle: false,
            showBulle1: false,
            showBulle2: false,
            showBulle3: false
        }
    }

    _showBulle() {
        this.setState({showBulle: !this.state.showBulle});
    }
    _showBulle1() {
        this.setState({showBulle1: !this.state.showBulle1});
    }
    _showBulle2() {
        this.setState({showBulle2: !this.state.showBulle2});
    }
    _showBulle3() {
        this.setState({showBulle3: !this.state.showBulle3});
    }
	
	render() {
        
		return (
			<div className='AjoutBulles'>
				<div className='button' onClick={this._showBulle.bind(this)}> Slot Bulle 1</div>
                <div className='button' onClick={this._showBulle1.bind(this)}> Slot Bulle 2</div>
                <div className='button' onClick={this._showBulle2.bind(this)}> Slot Bulle 3</div>
                <div className='button' onClick={this._showBulle3.bind(this)}> Slot Bulle 4</div>
                <Bulle onClose={this._showBulle.bind(this)} show={this.state.showBulle}/>
                <Bulle onClose={this._showBulle1.bind(this)} show={this.state.showBulle1}/>
                <Bulle onClose={this._showBulle2.bind(this)} show={this.state.showBulle2}/>
                <Bulle onClose={this._showBulle3.bind(this)} show={this.state.showBulle3}/>
			</div>

		);
	}
} 

