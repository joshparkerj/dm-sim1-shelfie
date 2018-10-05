import React, { Component } from 'react';
import axios from 'axios';
import './form.css';


const INIT_STATE = {
  img_url: '',
  name: '',
  price: '',
  selectedProductID: null,
  addButtonClass: 'active-button',
  saveButtonClass: 'dead-button'
};

class Form extends Component {
  constructor(){
    super();
    this.state = INIT_STATE;
  }

  componentDidUpdate(prevProps){
    if (this.props.product &&
        (!prevProps.product ||
         this.props.product.product_id !== prevProps.product.product_id)){
      this.setState({
        img_url: this.props.product.img_url,
        name: this.props.product.name,
        price: this.props.product.price,
        selectedProductID: this.props.product.product_id,
        addButtonClass: 'dead-button',
        saveButtonClass: 'active-button'
      });
    }
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleCancel = () => {
    this.setState(INIT_STATE);
  }

  handleAdd = () => {
    axios.post('/api/product/',{
      img_url: this.state.img_url,
      name: this.state.name,
      price: this.state.price
    })
      .then( res => {
        this.props.appGet();
        this.handleCancel();
      })
      .catch(err => {
        console.error(err);
      })
  }

  handleSave = () => {
    axios.put(`/api/product/${this.state.selectedProductID}`,{
      img_url: this.state.img_url,
      name: this.state.name,
      price: this.state.price
    })
      .then( res => {
        this.props.appGet();
        this.handleCancel();
      })
      .catch(err => {
        console.error(err);
      })
  }

  render(){
    return(
      <div className="form">
        <img src={this.state.img_url} alt={this.state.name} />
        <label>Image URL:</label>
        <input
          name="img_url"
          value={this.state.img_url}
          onChange={this.handleChange}
        />
        <label>Product Name:</label>
        <input
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <label>Price:</label>
        <input
          name="price"
          value={this.state.price}
          onChange={this.handleChange}
        />
        <div className="form-buttons">
          <button onClick={this.handleCancel}>Cancel</button>
          <button
            onClick={this.handleAdd}
            className={this.state.addButtonClass}>
            Add to Inventory
          </button>
          <button
            onClick={this.handleSave}
            className={this.state.saveButtonClass}>
            Save Changes
          </button>
        </div>
      </div>
    )
  }
}

export default Form;
