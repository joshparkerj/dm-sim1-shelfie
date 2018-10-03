import React from 'react';
import './product.css'

function Product(props){
  const imgStyle = {
    backgroundImage: `url(${props.item.img_url})`
  };
  return (
    <div className="product">
      <div className="product-image" style={imgStyle}>
      </div>
      <div className="product-info">
        <h5>{props.item.name}</h5>
        <h5>${props.item.price}</h5>
      </div>
    </div>
  )
}

export default Product;
