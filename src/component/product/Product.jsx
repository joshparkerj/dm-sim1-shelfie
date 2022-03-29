import React from 'react';
import PropTypes from 'prop-types';
import './product.css';

const Product = function Product({ item, del }) {
  return (
    <div className="product">
      <img
        className="product-image"
        src={item.imgUrl}
        alt={item.name}
        // eslint-disable-next-line no-param-reassign
        onError={(i) => { i.target.src = '/no_image.png'; }}
      />
      <div className="product-info">
        <h5>{item.name}</h5>
        <h5>
          $
          {item.price}
        </h5>
        <button type="button" onClick={() => del(item.productId)}>Delete</button>
        <a href={`/edit/${item.productId}`}>
          <button type="button">Edit</button>
        </a>
      </div>
    </div>
  );
};

Product.propTypes = {
  item: PropTypes.shape({
    imgUrl: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.string,
    productId: PropTypes.string,
  }).isRequired,
  del: PropTypes.func.isRequired,
};

export default Product;
