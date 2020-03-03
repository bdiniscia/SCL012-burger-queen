import React, { Component } from "react";
import '../App.css'

import ClientID from "../sections/waitress/clientID";
import Menu from "../sections/waitress/menu";
import Total from "../sections/waitress/total";
import OrderStats from "../sections/waitress/orderStats";


class Waitress extends Component {
  render() {
    return (
      <div>
        <div className="app">
          <div className="takingOrder">
            <ClientID />
            <div className="menuDiv">
              <Menu />
              <Total />
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
