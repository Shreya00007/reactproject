import React,{useState} from 'react';
function Hooks()
{
    const [count,setCount]=useState(100)
    return(<div>
        <h1>Hooks in functional Component {count} </h1>
        <button onClick={()=>{setCount(count+1)}}>Increment</button>
        </div>)
}

export default Hooks;
