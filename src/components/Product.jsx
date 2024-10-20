import React from 'react';

const Product = ({product}) => {
    console.log(product)
    return (
        <div>
            <div className="card">
            <img className='card-img' src={product.image} alt="" />
            <h3>{product.title}</h3>
            <p><b>Discription : </b>{product.description}</p>
            <div className="card-footer">
              <h1>Price:{product.price}</h1>
              <button className='add-btn'>Add To Cart</button>
            </div>
          </div>
        </div>
    );
};

export default Product;