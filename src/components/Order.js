import React, { Component } from 'react'
import { FaTrash } from 'react-icons/fa'

export class Order extends Component {
  render() {
    return (
      <div className='item'>
        <img src={ this.props.item.image } alt=''/>
        <h1>{ this.props.item.title}</h1>
        <b>{ this.props.item.regular_price.value}$</b>
        <FaTrash className='delete-icon' onClick={() => this.props.onDelete(this.props.item.id)}/>
      </div>
    )
  }
}

export default Order