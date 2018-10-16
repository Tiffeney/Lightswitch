import React, { Component } from 'react'

class Lightswitch extends Component {

    state = {
        on: false
    }
    
    turnOn() {
        // alert('You Clicked The Turn On Button')
        this.setState({
            on: true
        })
    }

    turnOff() {
        this.setState({
            on: false
        })
    }
    render () {
        return (
            <div>
                <div className={`bulb ${this.state.on ? "on" : "off"}`}>
                {this.state.on === true ? "true" : "false"}
                </div>
                <button onClick={()=>this.turnOn()}>On</button>
                <button onClick={()=>this.turnOff()}>Off</button>
            </div>
        )
    }
}

export default Lightswitch