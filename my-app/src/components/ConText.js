import React, { Component } from 'react'
const context = React.createContext();
const Provider = context.Provider;
const Consumer = context.Consumer;
const withConsumer = function(Consumer){
    return Comp=>props=>{
    return <Consumer>{value=><Comp {...value}{...props}></Comp>}</Consumer>
    }
}
const Child = withConsumer(Consumer)(
    function(props){
        return <button onClick={()=>props.add()} title={props.name}>{props.count}</button>
    }
)
// function Child(props){
//     return <button onClick={()=>props.add()} title={props.name}>{props.count}</button>
// }
export default class ConText extends Component {
    state={
        count:0
    }
    add=()=>{
        this.setState(nextState=>({count:nextState.count+1}))
    }
    render() {
        return (
                <Provider value={{count:this.state.count,add:this.add}}>
        {/* <Consumer>{value=><Child {...value}></Child>}</Consumer>
        <Consumer>{value=><Child {...value}></Child>}</Consumer>
        <Consumer>{value=><Child {...value}></Child>}</Consumer> */}
                   <Child name="foo"></Child>
                   <Child name="nar"></Child>
                </Provider>
        )
    }
}
