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
            if (item.option !== undefined) {
              return (
                <div>
                  <div key={item.id} className="itemsMenuTotal">
                    <p className="itemNameTotal options-p">-{item.name}</p>
                    <p className="itemNameTotal options-p">${item.price}</p>
                  </div>

                  <div className="totalOptions">
                    <p className="total-options">-{item.option}</p>
                    {item.extras.map(extra => {
                      return <p className="totalExtras">-{extra}</p>;
                    })}
                  </div>
                </div>
              );
            } else {
              return (
                <div key={item.id} className="itemsMenuTotal">
                  <p className="itemNameTotal">-{item.name}</p>
                  <p className="itemNameTotal">${item.price}</p>
                </div>
              );
            }
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
