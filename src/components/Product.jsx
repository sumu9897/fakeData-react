import React from 'react';

const Product = ({product, handleCart}) => {
    // console.log(handleCart)
    return (
        <div>
            <div className="card">
            <img className='card-img' src={product.image} alt="" />
            <h3>{product.title.slice(0,10)}</h3>
            <p><b>Discription : </b>{product.description.slice(0,50)}</p>
            <div className="card-footer">
              <h4>Price:{product.price}$</h4>
              <button onClick={() => handleCart(product)} className='add-btn'>Add To Cart</button>
            </div>
          </div>
        </div>
    );
};

export default Product;