import React from 'react'
import Person from './Person'
import Superman from './Superman'
import Sohan from './Components/Test'
import Product from './Components/Product'
import Person2 from './Components/Person2'
import Person3 from './Components/Person3'
import Laptop from './Components/Laptop'
import Events from './Components/Events'
import Counter from './Components/Counter'


export const App = () => {
  
  
  return (
    <>
      <h1>App is entry point</h1>
      <Person/>
      <Sohan/>
      <Product 
        title='Galaxy S24 Ultra' 
        brand='Samsung' 
        price={150000} 
      />

      <Product title='Iphone 16 Pro Max' brand='Apple' price={180000} />
      <Product title='OnePlus 13' brand='OnePlus' price={40000} />
      <Person2 name='Alex' age='25' salary={50000}/>
      <Person2 name='Max' age='24' salary={40000}/>
      <Person3 name="Jon" age={18} panCard={true} price={100}/>
      <Laptop brandName="HP" model="Probook" price={150000}/>
      <Laptop brandName="Lenovo" model="Yoga" price={250000}/>
      <Laptop brandName="Dell" model="Inspiron" price={50000}/>
      <Events/>
      <Counter/>
    </>

  )
}

export default App