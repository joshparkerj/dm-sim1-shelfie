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
        <button onClick={() => props.del(props.item.product_id)}>Delete</button>
        <button onClick={() => props.edit(props.item)}>Edit</button>
      </div>
    </div>
  )
}

export default Product;
