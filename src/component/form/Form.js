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

  componentDidMount(){
    if (["id"] in this.props.match.params){
      this.getProductByID(this.props.match.params.id);
      this.setState({
        addButtonClass: 'dead-button',
        saveButtonClass: 'active-button'
      })
    }
  }

  getProductByID = id => {
    axios.get(`/api/product/${id}`)
      .then(res => {
        this.setState({
          img_url: res.data[0].img_url,
          name: res.data[0].name,
          price: res.data[0].price,
          selectedProductID: res.data[0].product_id
        })
      })
      .catch (err => {
        console.error(err);
      })
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleCancel = () => {
    this.props.history.push('/')
  }

  handleAdd = () => {
    axios.post('/api/product/',{
      img_url: this.state.img_url,
      name: this.state.name,
      price: this.state.price
    })
      .then( res => {
        this.props.history.push('/');
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
        this.props.history.push('/');
      })
      .catch(err => {
        console.error(err);
      })
  }

  render(){
    return(
      <div className="form">
        <img
          src={this.state.img_url}
          alt={this.state.name}
          onError={i => i.target.src = '/no_image.png'}
        />
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
