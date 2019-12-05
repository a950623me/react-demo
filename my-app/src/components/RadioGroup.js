import React from 'react'
function RadioGroup(props){
   return(
       <div>
           {
               React.Children.map(props.children,child=>{
                   //要修改虚拟dom，只能克隆它
                   //参数一是克隆对象
                   //参数二是设置的属性
                   return React.cloneElement(child,{name:props.name})
               })
           }
       </div>
   )
}
function Radio({children,...rest}){
    return(
        <label>
            <input type="radio" {...rest}/>
            {children}
        </label>
    )

}
export default function Composition() {
    return (
        <div>
            <RadioGroup name="mvvm">
              <Radio value="vue">Vue</Radio>  
              <Radio value="react">React</Radio>  
              <Radio value="ng">Angular</Radio>   
            </RadioGroup> 
        </div>
    )
}
