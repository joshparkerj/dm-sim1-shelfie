import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { useNavigate, useMatch } from 'react-router-dom';

import './form.css';

const Form = function Form() {
  const [imgUrl, setImgUrl] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [addButtonClass, setAddButtonClass] = useState('active-button');
  const [saveButtonClass, setSaveButtonClass] = useState('dead-button');

  const navigate = useNavigate();
  const match = useMatch();

  const getProductByID = (id) => {
    axios.get(`/api/product/${id}`)
      .then((res) => {
        setImgUrl(res.data[0].img_url);
        setName(res.data[0].name);
        setPrice(res.data[0].price);
        setSelectedProductId(res.data[0].product_id);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    if (['id'] in match.params) {
      getProductByID(match.params.id);

      setAddButtonClass('dead-button');
      setSaveButtonClass('active-button');
    }
  }, []);

  const handleCancel = () => {
    navigate('/');
  };

  const handleAdd = () => {
    axios.post('/api/product/', {
      imgUrl,
      name,
      price,
    })
      .then(() => {
        navigate('/');
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleSave = () => {
    axios.put(`/api/product/${selectedProductId}`, {
      imgUrl,
      name,
      price,
    })
      .then(() => {
        navigate('/');
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="form">
      <img
        src={imgUrl}
        alt={name}
        // eslint-disable-next-line no-param-reassign
        onError={(i) => { i.target.src = '/no_image.png'; }}
      />
      <label htmlFor="img-url">
        Image URL:
        <input
          type="url"
          id="img-url"
          name="img_url"
          value={imgUrl}
          onChange={({ target }) => setImgUrl(target.value)}
        />
      </label>
      <label htmlFor="name">
        Product Name:
        <input
          id="name"
          name="name"
          value={name}
          onChange={({ target }) => setName(target.value)}
        />
      </label>
      <label htmlFor="price">
        Price:
        <input
          id="price"
          name="price"
          value={price}
          onChange={({ target }) => setPrice(target.value)}
        />
      </label>
      <div className="form-buttons">
        <button type="button" onClick={handleCancel}>Cancel</button>
        <button
          type="button"
          onClick={handleAdd}
          className={addButtonClass}
        >
          Add to Inventory
        </button>
        <button
          type="submit"
          onClick={handleSave}
          className={saveButtonClass}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Form;
