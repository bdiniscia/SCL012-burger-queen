import React, { Component } from "react";
import "../../App.css";
import "./total.css";

class Total extends Component {

  sumTotal = () => {
    let suma = 0;
    this.props.total.map(e => {
      suma += e.price;

      if (e.extras != null) {
        e.extras.map(extra => {
          
          let idx = extra.indexOf('$');
          let result = extra.substring(idx + 1, extra.length);
          suma += parseInt(result)
        });
      }
    });
    return suma;
  };


  deleteItem = (index) => {
    this.props.deleteOrder(index)
  }

  render() {
    return (
      <div className="total">
        <div>
          {this.props.total.map((item, i) => {
            if (item.option !== undefined) {
              return (
                <div>
                  <div key={item.id} className="itemsMenuTotal">
                    <p className="itemNameTotal options-p itemCustom">
                      -{item.name}
                    </p>

                    <p className="itemNameTotal options-p">${item.price}</p>
                    <p onClick={() => this.deleteItem(i)} className="deleteItem options-p">x</p>
                  </div>

                  <div className="totalOptions">
                    <p className="total-options">{item.option}</p>
                    {item.extras.map(extra => {
                      return <p className="totalExtras">{extra}</p>;
                    })}
                  </div>
                </div>
              );
            } else {
              return (
                <div key={item.id} className="itemsMenuTotal">
                  <p className="itemNameTotal itemCustom">-{item.name}</p>
                  <p className="itemNameTotal">${item.price}</p>
                  <p onClick={() => this.deleteItem(i)} className="deleteItem">x</p>
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
