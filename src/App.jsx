import { useEffect, useState } from 'react'

import './App.css'
import Product from './components/Product';

function App() {
  const [products ,setProducts] =useState([]);
  const [cart, setCart] = useState([]);

  useEffect(()=>{
    fetch("../public/fakeData.json")
    .then(response => response.json())
    .then(data =>{
      setProducts(data)
    })
  },[]);

  const handleCart = (p) =>{
    const isExists = cart.find((product) => product.id ==p.id)
    if(!isExists){
      setCart([...cart,p])
    }else{
      alert("Cart already exists");
    }

  };
  console.log(cart)

  // console.log(products)
  return (
    <>

      <div className="main-container">
        <div className="cards-container">
          {
            products.map(product =><Product
              product={product} 
              handleCart={handleCart}></Product>)
          }
          
        </div>
        <div className="card-container">
        <h3>Cart Items</h3>
          <div className="cart-title">
            <h5>Name :</h5>
            <h5>Price :</h5>
          </div>
          <div >
          {
            cart.map((item) => (
              <div className="cart-info">
                <h5>{item.title.slice(0,10)}</h5>
                <h5>{item.price}</h5>
              </div>
            ))
          }

          </div>
        </div>
      </div>
      
    </>
  )
}

export default App
