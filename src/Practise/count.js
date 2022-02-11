import React,{useState} from "react";

export const Count = () =>{
   let [count,setCount] = useState(0);

    return(
        <div>
            <h1> Lets count</h1>
            <h1>{count}</h1>
            <button onClick ={()=>count<100?setCount(count+10):""}>Increment by 10</button>
            <button onClick ={()=>count<10?setCount(count+1):""}>Increment</button>
            <button onClick ={()=>count>0?setCount(count-10):""}>decrement by 10</button>
            <button onClick ={()=>count>0?setCount(count-1):""}>decrement</button>
            <button onClick ={()=>setCount(0)}>reset</button>

        </div>
    )
}

