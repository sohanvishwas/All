import React from 'react'

const Counter = () => {
    let counter=0

    const increaseBy1=()=>{
      counter++;
      console.log("counter = ", counter);
    
    }
  return (
    <div>
        <h1>{counter}</h1>
    </div>
  )
}

export default Counter