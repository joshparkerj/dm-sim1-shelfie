import React from 'react';
import './product.css'

function Product(props){
  return (
    <div className="product">
      <img
        className="product-image"
        src={props.item.img_url}
        alt={props.item.name}
        onError={i => i.target.src = '/no_image.png'}
      />
      <div className="product-info">
        <h5>{props.item.name}</h5>
        <h5>${props.item.price}</h5>
        <button onClick={() => props.del(props.item.product_id)}>Delete</button>
        <a href={`/edit/${props.item.product_id}`}>
          <button>Edit</button>
        </a>
      </div>
    </div>
  )
}

export default Product;
