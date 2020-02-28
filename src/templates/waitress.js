import React, { Component } from "react";
import '../App.css'

import ClientID from "../sections/clientID";
import Menu from "../sections/menu";
import Total from "../sections/total";
import OrderStats from "../sections/orderStats";


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
