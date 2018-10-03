import React, { Component } from 'react';
import './form.css';

const INIT_STATE = {
  img_url: '',
  name: '',
  price: ''
};

class Form extends Component {
  constructor(){
    super();
    this.state = INIT_STATE;
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleCancel = () => {
    this.setState(INIT_STATE);
  }

  render(){
    return(
      <div className="form">
        <label>Image URL:</label>
        <input name="img_url" onChange={this.handleChange} />
        <label>Product Name:</label>
        <input name="name" onChange={this.handleChange} />
        <label>Price:</label>
        <input name="price" onChange={this.handleChange} />
        <div className="form-buttons">
          <button onClick={this.handleCancel}>Cancel</button>
          <button>Add to Inventory</button>
        </div>
      </div>
    )
  }
}

export default Form;
