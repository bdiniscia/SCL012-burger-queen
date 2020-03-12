import React, { Component } from "react";
import "../App.css";

import ClientID from "../sections/waitress/clientID";
import Menu from "../sections/waitress/menu";
import Total from "../sections/waitress/total";
import OrderStats from "../sections/waitress/orderStats";
import Button from '../components/button'

class Waitress extends Component {
  state = {
    client: "",
    table: "",
    order: []
  };

  actualizarCliente(nombreCliente) {
    this.setState({
      client: nombreCliente
    });
  }

  actualizarMesa(numeroMesa) {
    this.setState({
      table: numeroMesa
    });
  }
 
  // Actualiza el estado global
  addOrder(item) {
    this.setState(previousState => ({
      order: [...previousState.order, item]
    }));
    console.log(this.state.order);
  }
  // Función que elimina el pedido y actualiza el state
  deleteOrder = (index) => {
    let currentOrder = [...this.state.order];
    currentOrder.splice(index, 1);
    this.setState({
      order : currentOrder
    })
  }

  render() {
    return (
      <div>
        <div className="app">
          <div className="takingOrder">
            <ClientID />
            <div className="menuDiv">
              <Menu addOrder={this.addOrder.bind(this)} />
              <Total
              deleteOrder={this.deleteOrder.bind(this)} 
              total={this.state.order} />
            </div>
              <div className='buttonSendCook'>
              <Button title='Enviar a cocina'/>
              </div>
          </div>
          <div className="orderStatus">
            <OrderStats />
          </div>
        </div>
      </div>
    );
  }
}

export default Waitress;
