import React, { Component } from 'react'
// import products from "../base/products.json"
import Item from './Item'


export class Items extends Component {
  render() {
    return (
      <main>{this.props.items.map(el =>(
        <Item key={el.id} item={el} onAdd={this.props.onAdd}/>
      ))}</main>

        // <main>
        //     {products && products.map( product => {
        //       return(
        //         <main className='item' key={product.id} item={product}>
        //             <div className='item'>
        //                 <img src={ product.image } alt=''/>
        //                 <h1>{product.title}</h1>
        //                 <b>{product.regular_price.value}$</b>
        //                 <div className='add-to-card' onClick={() => this.props.onAdd(this.props.item)}>+</div>
        //             </div>
        //         </main>
        //       )
        //     })
        //     }
        // </main>
    )
  }
}

export default Items