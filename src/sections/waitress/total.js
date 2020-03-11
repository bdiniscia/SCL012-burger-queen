import React, { Component } from "react";
import "../../App.css";
import "./total.css";

class Total extends Component {
  sumTotal = () => {
    let suma = 0;
    this.props.total.map(e => {
      suma += e.price;

    //   if(e.extras != null){
    //       e.extras.map(extra => {
    //         suma += extra.price;
    //       });
    //}
    });
    return suma;
  };

  render() {
    return (
      <div className="total">
        <div>
          {this.props.total.map(item => {
            return (
              <div key={item.id} className="itemsMenuTotal">
                <p className="itemNameTotal">-{item.name}</p>
                <p className="itemNameTotal">${item.price}</p>
              </div>
            );
          })}
        </div>
        <div className="sumTotal">
          <p className="ptotal">TOTAL:</p>
          <p>{this.sumTotal()}</p>
        </div>
      </div>
    );
  }
}

export default Total;
