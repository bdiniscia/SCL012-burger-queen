import React, { Component } from "react";
import '../App.css'

import ClientID from "../sections/waitress/clientID";
import Menu from "../sections/waitress/menu";
import Total from "../sections/waitress/total";
import OrderStats from "../sections/waitress/orderStats";


class Waitress extends Component {

  state = {
    client: '',
    table: '',
    order: [],
  }
  
  actualizarCliente(nombreCliente){
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

  render() {
    return (
      <div>
        <div className="app">
          <div className="takingOrder">
            <ClientID />
            <div className="menuDiv">
              <Menu addOrder={this.addOrder.bind(this)} />
              <Total total={this.state.order} />
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
