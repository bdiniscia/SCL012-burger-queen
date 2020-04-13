import React, { Component } from 'react';
import '../../App.css';
import db from '../../config/firebase';
import OrderCards from '../../components/order-cards'
import ReadyCards from '../../components/ready-cards'
import './orderStats.css'

class OrderStats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      ordersReady: [],
    }
  }

  // const collectionOfOrders = db.collection('orders');
  
  componentDidMount() {
    const orderedCooking = db.collection('orders').where('cooked', '==', 'PREPARANDO').orderBy('time', 'asc');
    orderedCooking.onSnapshot((querySnapshot) => {
        const orders = [];

        querySnapshot.forEach(doc => {
          console.log(doc.data());
          const dataOrder = doc.data();
          orders.push(dataOrder);
        });

        this.setState({
              orders,
        });
    });

    const orderedReady = db.collection('orders').where('cooked', '==', 'LISTO').orderBy('time', 'asc');
    orderedReady.onSnapshot((querySnapshot) => {
        const ordersReady = [];

        querySnapshot.forEach(doc => {
          const dataOrder = doc.data();
          ordersReady.push(dataOrder);
        });

        this.setState({
              ordersReady,
        });
    });
  } 
  render () {
    
    return (
      <div className='container-orders'>
        <h5 className='title-OrderStats'>Estados de las órdenes:</h5>
            <div className='container-cards'>
                {this.state.ordersReady.map((order) => {
                return (
                    <ReadyCards 
                    name= {order.client}
                    table = {order.table}
                    order = {order.order}
                    state = {order.cooked}
                    delivered = {order.delivered}
                    />
                )
                })} 
                {this.state.orders.map((order) => {
                return (
                    <OrderCards 
                    name= {order.client}
                    table = {order.table}
                    order = {order.order}
                    state = {order.cooked}
                    delivered = {order.delivered}
                    />
                )
                })} 
            </div>
      </div>
    )
  }


}

export default OrderStats;