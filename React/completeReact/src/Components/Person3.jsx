import React from 'react'

const Person3 = ({name,age,panCard,price}) => {
  return (
    <div>
        <h2>Name = {name}</h2>
        <h2>{age>18 ? <h3>You can drive</h3> : <h3>You can not drive</h3> }</h2>
        <h2>{panCard ? <h3>You can open bank account</h3> : <h3>You can not open bank account</h3> }</h2>
        <div>{(price==100) && <h3>You can purchase iphone</h3>}</div>
    </div>
  )
}

export default Person3