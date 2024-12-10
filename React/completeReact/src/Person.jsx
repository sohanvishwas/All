import React from 'react'
import Superman from './Superman'

export const Person = () => {
    const person = {
        name: "Alex",
        age: 18,
        city: "Delhi"
    }
    
    const product = {
        title: "iphone",
        model: "iphone-16",
        price: 65000
    }
  return (
    <>
        <h1>React</h1>
      <div>
        <h1>Name={person.name}</h1>
        <h1>Age={person.age}</h1>
        <h1>City={person.city}</h1>
      </div>
      <Superman/>
      <div>
        <h1>Title={product.title}</h1>
        <h1>Model={product.model}</h1>
        <h1>Price={product.price}</h1>
      </div>
    </>
  )
}

export default Person