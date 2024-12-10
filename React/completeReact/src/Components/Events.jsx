import React from 'react'

const Events = () => {
    const handleClick=()=>{
        alert('You click the button')
    }
    const addition=(a)=>{
        alert(a+10)
    }
  return (
    <div>
        <h2>We are learning Events</h2>
        <button onMouseOver={handleClick}>Click this button</button>
        <button onClick={()=>addition(10)}>Button 2</button>
    </div>
  )
}

export default Events