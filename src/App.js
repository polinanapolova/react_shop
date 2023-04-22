import React from "react";

import Header from "./components/Header";
import Items from "./components/Items";
import Footer from "./components/Footer";
import Categories from "./components/Categories";




class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      orders:[],
      currentItems:[],
     items:[
    {
      "type": "simple",
      "id": 1,
      "sku": "s1",
      "title": "Product 1",
      "regular_price": {
        "currency": "USD",
        "value": 27.12
      },
      "image": "/images/1.png",
      "brand": 9
    },
    {
      "type": "simple",
      "id": 2,
      "sku": "s2",
      "title": "Product 2",
      "regular_price": {
        "currency": "USD",
        "value": 36.87
      },
      "image": "/images/2.png",
      "brand": 8
    },
    {
      "type": "simple",
      "id": 3,
      "sku": "s3",
      "title": "Product 3",
      "regular_price": {
        "currency": "USD",
        "value": 28.91
      },
      "image": "/images/3.png",
      "brand": 2
    },
    {
      "type": "simple",
      "id": 4,
      "sku": "s4",
      "title": "Product 4",
      "regular_price": {
        "currency": "USD",
        "value": 41.23
      },
      "image": "/images/4.png",
      "brand": 7
    },
    {
      "type": "simple",
      "id": 5,
      "sku": "s5",
      "title": "Product 5",
      "regular_price": {
        "currency": "USD",
        "value": 88.00
      },
      "image": "/images/5.png",
      "brand": 3
    },
    {
      "type": "simple",
      "id": 6,
      "sku": "s6",
      "title": "Product 6",
      "regular_price": {
        "currency": "USD",
        "value": 127.41
      },
      "image": "/images/6.png",
      "brand": 6
    },
    {
      "type": "simple",
      "id": 7,
      "sku": "s7",
      "title": "Product 7",
      "regular_price": {
        "currency": "USD",
        "value": 123.40
      },
      "image": "/images/7.png",
      "brand": 5
    },
    {
      "type": "simple",
      "id": 8,
      "sku": "s8",
      "title": "Product 8",
      "regular_price": {
        "currency": "USD",
        "value": 92.32
      },
      "image": "/images/8.png",
      "brand": 1
    },
    {
      "type": "simple",
      "id": 9,
      "sku": "s9",
      "title": "Product 9",
      "regular_price": {
        "currency": "USD",
        "value": 53.40
      },
      "image": "/images/9.png",
      "brand": 2
    }],
      // orders: [],
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
  }
  render(){
  return (
    <div className="wrapper">
      <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
      <Categories chooseCategory={this.chooseCategory}/>
      <Items items={this.state.currentItems} onAdd={this.addToOrder}/>
      <Footer/>
    </div>
    
  );
}

chooseCategory(brand){
  this.setState({
    currentItems: this.state.items.filter(el => el.brand === brand)
  })
}

deleteOrder(id) {
  
  this.setState({orders: this.state.orders.filter(el => el.id !== id)})
}

addToOrder(item){
  let isInArray = false
  this.state.orders.forEach(el => {
    if(el.id === item.id)
      isInArray = true
  })
  if(!isInArray)
    this.setState({orders: [...this.state.orders, item]})
}

// addToOrder(item){
//   this.setState({orders: [...this.state.orders, item]}, () =>{
//     console.log(this.state.orders)
//   })
// }
 }


export default App;
