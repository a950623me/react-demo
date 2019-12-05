    import React, { Component } from 'react'
    function lesson(props){
        return (
            <div>
                {props.stage}-{props.title}
            </div>
        )
    }
    //模拟数据
    const lessons = [
        { 
            stage: "React", 
            title: "核心API"
        },
        { 
            stage: "React", 
            title: "组件化1" 
        },
        { 
            stage: "React", 
            title: "组件化2" 
        }
    ];
    // function withContent(Cmp){
    //     return function(props){
    //         const content = lessons[props.idx]
    //         return <Cmp {...content}/>
    //     }
    // }
    const withContent = Cmp=>props=>{
        const content = lessons[props.idx]
            return <Cmp {...content}/>
    }
    
    // const withContent = function Cmp(){
    //     return function Cmp(props){
    //         return
    //     }
    // }
    //链式调用
    const withLog = Cmp=>{
        return class extends React.Component{
            render(){
                
                return <Cmp {...this.props}></Cmp>;
            }
            componentDidMount(){
                console.log(this.props)
            }
            
        }
    }
    const LessonWithContent = withLog(withContent(lesson))
    export default class HocTest extends Component {
        render() {
            return (
                <div>
                   {[0,0,0].map((item,idx)=>(
                           <LessonWithContent idx={idx} key={idx}/>
                    ))} 
                </div>
            )
        }
    }
