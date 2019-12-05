import React,{useState} from 'react'
function FruitList({fruits,onSetFruit}){
   return(
       <ul>
          {
              fruits.map(f=>(
                  <li key={f} onClick={()=>onSetFruit(f)}>{f}</li>
                ))
          }
       </ul>
   )
}
function FruitAdd(props){
    const [pname,setPname] = useState("");
    const onAddFruit = e=>{
        if(e.key==="Enter"){
            props.onAddFruit(pname);
            setPname("")
        }
    }
    return(
        <div>
            <input type="text" value={pname} onChange={e=>setPname(e.target.value)} onKeyDown={onAddFruit}></input>
        </div>
    )
}
export default function HooksTest() {
    const [fruit,setFruit] = useState("");
    const [fruits,setFruits] = useState(["香蕉","西瓜"]);
    return (
        <div>
            {/* <p>{fruit===""?"请选择喜爱的水果:":`您的选择是：${fruit}`}</p>
            <FruitList fruits={fruits} onSetFruit = {setFruit}></FruitList> */}
            <FruitAdd onAddFruit={pname=>setFruits([...fruits,pname])}></FruitAdd>
        </div>
    )
}
