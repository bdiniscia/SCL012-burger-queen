import React, { Component } from "react";
import "../../App.css";
import "./total.css";

class Total extends Component {
  render() {
    return (
      <div className="total">
        <div>
        {this.props.total.map(item => {
          return (
            <div className="itemsMenuTotal">
              <p className="itemNameTotal">-{item.name}</p>
              <p className="itemNameTotal">${item.price}</p>
            </div>
          );
        })}
        </div>
        <div className="sumTotal">
          <p className='ptotal'>TOTAL:</p>
          <p>$2000</p>
        </div>
      </div>
    );
  }
}

export default Total;
