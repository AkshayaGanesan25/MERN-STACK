import React, { useState } from 'react'
const Counter = () => {
    const [count,setcount]=useState(0);
    const [name,setname]=useState();
    const [email,setemail]=useState();
    const handle =()=>{
      setcount(count - 1)
    }
  return (
    <div>
      <p>count {count}</p>
      <button onClick={()=>setcount(count + 1)}> Increment</button>
      <button onClick={handle}> Decrement</button>
    </div>
  )
}

export default Counter
