import React, { Component } from "react";
import "../App.css";

import ClientID from "../sections/waitress/clientID";
import Menu from "../sections/waitress/menu";
import Total from "../sections/waitress/total";
import OrderStats from "../sections/waitress/orderStats";
import Button from "../components/button";

class Waitress extends Component {
  state = {
    client: "",
    table: "",
    order: []
  };

  inputClient(clientName) {
    console.log("client= " + this.state.client);
    this.setState({
      client: clientName
    });
  }

  selectTable(tableNumber) {
    this.setState({
      table: tableNumber
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
  deleteOrder = index => {
    let currentOrder = [...this.state.order];
    currentOrder.splice(index, 1);
    this.setState({
      order: currentOrder
    });
  };

  resetState() {
    this.setState({
      client: "",
      table: "",
      order: []
    });
  }

  render() {
    return (
      <div>
        <div className="app">
          <div className="takingOrder">
            <ClientID
              inputClient={this.inputClient.bind(this)}
              selectTable={this.selectTable.bind(this)}
            />
            <div className="menuDiv">
              <Menu addOrder={this.addOrder.bind(this)} />
              <Total
                deleteOrder={this.deleteOrder.bind(this)}
                resetState={this.resetState.bind(this)}
                total={this.state.order}
              />
            </div>
            <div className="buttonSendCook">
              <Button onClick={null} title="Enviar a cocina" />
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
