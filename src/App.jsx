import { useEffect, useState } from 'react'

import './App.css'
import Product from './components/Product';

function App() {
  const [products ,setProducts] =useState([]);

  useEffect(()=>{
    fetch("../public/fakeData.json")
    .then(response => response.json())
    .then(data =>{
      setProducts(data)
    })
  },[])
  console.log(products)
  return (
    <>

      <div className="main-container">
        <div className="cards-container">
          {
            products.map(product =><Product product={product}></Product>)
          }
          
        </div>
        <div className="card-container">Card</div>
      </div>
      
    </>
  )
}

export default App
