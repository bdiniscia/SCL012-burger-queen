import React, { Component } from 'react';
import '../../App.css';
import db from '../../config/firebase';
import OrderCards from '../../components/order-cards'
import './orderStats.css'

class OrderStats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
    }
  }

  // const collectionOfOrders = db.collection('orders');
  
  componentDidMount() {
    db.collection('orders').onSnapshot((querySnapshot) => {
        querySnapshot.forEach(doc => {
          console.log(doc.data())
          const dataOrder = doc.data();
          this.setState(previousState => ({
            orders: [...previousState.orders, dataOrder],
          }));

          console.log("STATE:", this.state)

        })
    });
  } 
  render () {
    
    return (
      <div className='container-orders'>
        <h5>Estados de las órdenes</h5>
        {this.state.orders.map((order) => {
          return (
            <OrderCards 
            name= {order.name}
            table = {order.table}
            order = {order.order}
            />
          )
        })} 
      </div>
    )
  }
}

export default OrderStats;