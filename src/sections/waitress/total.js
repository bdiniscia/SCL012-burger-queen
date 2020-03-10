import React, { Component } from "react";
import "../../App.css";

class Total extends Component {
  render() {
    return (
      <div className="total">
        <li>
          {
          this.props.total.map(item => {
            return <ol>{item.name}</ol>;
          })
          }
        </li>
      </div>
    );
  }
}

export default Total;
