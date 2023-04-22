import React, { useState } from 'react';
// import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import Order from './Order';

const showOrders = (props) => {
  let sum = 0;
  props.orders.forEach(el => sum += Number.parseFloat(el.regular_price.value))
  
  return (<div>
    {props.orders.map(el => (
      <Order onDelete={props.onDelete} key={el.id} item ={el}/>
    ))}
    <p className='sum'>Сумма: {new Intl.NumberFormat().format(sum)}$</p>
  </div>)
}

const showNothing = () => {
  return(<div className='empty'>
    <h2>Корзина пуста</h2>
    </div>)
}


export default function Header(props) {
  let[cartOpen, setCartOpen] = useState(false)
  
  
  return (
   <header>
    <div>
        <span className='logo'>Garment Store</span>
        <ul className='nav'>
            <li>Про нас</li>
            <li>Контакты</li>
            <li>Кабинет</li>
        </ul>
        <FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-card-button ${cartOpen && 'active'}`}/>
        

        {cartOpen && (
          <div className='shop-card'>
            {props.orders.length > 0 ?
            showOrders(props) : showNothing()}
          </div>
        )}
    </div>
    <div className='presentation'></div>
   </header>
  )
}
