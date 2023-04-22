import React, { Component } from 'react'
// import Items from './Items'

export class Item extends Component {
  render() {
    return (
      <div className='item'>
        <img src={ this.props.item.image } alt=''/>
        <h1>{this.props.item.title}</h1>
        <b>{this.props.item.regular_price.value}$</b>
        <div className='add-to-card' onClick={() => this.props.onAdd(this.props.item)}>+</div>
    </div>
    )
  }
}

export default Item