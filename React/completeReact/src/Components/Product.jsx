import React from 'react'

const Product = ({title, brand, price}) => {
        
  return (
    <div>
        <h2>Mobile Name = {title}</h2>
        <h3>Mobile Brand = {brand}</h3>
        <h4>Mobile Price = {price}</h4>
    </div>
  )
}

export default Product