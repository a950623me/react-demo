import React, { Component } from 'react'
import ToggleCss from './Toggle.module.css'
export default class Toggle extends Component {
    constructor(props){
        super(props);
        this.state = {isToggleOn:true}
        this.handClick = this.handClick.bind(this)
    }
    handClick=()=>{
        console.log(this)
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }))
    }
    deleteRow=(id,e)=>{
        console.log(id);
        console.log(e)
    }
    render() {
        return (
            <div>
                <button onClick = {this.handClick} className = {`${ToggleCss.switch} ${this.state.isToggleOn===true?ToggleCss.switch:null}`} >
                    {/* {this.state.isToggleOn?'ON':'OFF'} */}
                </button>
                <button onClick={e => this.deleteRow(2, e)}>Delete Row</button>
            </div>
        )
    }
}
