import React, { Component } from 'react'

class Lightswitch extends Component {

    state = {
        on: false
    }
    
    // turnOn() {
    //     // alert('You Clicked The Turn On Button')
    //     this.setState({
    //         on: true
    //     })
    // }

    // turnOff() {
    //     this.setState({
    //         on: false
    //     })
    // }

    toggleLight() {
        //If the light is on, turn it off
        //if the light if off, turn it on
        this.setState((state) => { // Best practice use the "function" form of setstate when you want to update stated based off current state of props.
            return {on: !state.on }
        })
    }
    render () {
        return (
            <div>
                <div className={`bulb ${this.state.on ? "on" : "off"}`}>
                {this.state.on === true ? "true" : "false"}
                </div>
                <button onClick={()=>this.toggleLight()}>Toogle</button>
                {/* <button onClick={()=>this.turnOn()}>On</button>
                <button onClick={()=>this.turnOff()}>Off</button> */}
            </div>
        )
    }
}

export default Lightswitch