import React, { Component } from 'react'

export default class JsxTest extends Component {
    constructor(props){
        super(props);
        this.state = {date:new Date()}
    }
    componentDidMount(){
        this.timerID =  setInterval(this.tick,1000)
    }
    componentWillUnmount(){
        clearInterval(this.timerID)
    }
    tick = ()=>{
        this.setState({
            date:new Date()
        })
    }
    render() {
        return (
            <div>
               <h1>JsxTest&nbsp;{this.props.name}</h1> 
               <h1>{this.state.date.toLocaleTimeString()}</h1>
               <h1>12</h1>
            </div>
        )
    }
}
