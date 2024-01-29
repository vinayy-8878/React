import React, { useState } from 'react'

const Function=(props)=> {
  console.log("Functional components")
  const [count,setCount]=useState(0)
  useEffect(() => {
   //API call
  }, [])
  
  return (
    <div>
         <h1>Count:{count}</h1>
         <button onClick={()=>{
          setCount(count+1);
         }}>Increase count</button>
        <h2>Name:{props.name}</h2>
        <h3>Location:Indore</h3>
        <h4>Contact:function@gmail.com</h4>
    </div>
  )
}

export default Function