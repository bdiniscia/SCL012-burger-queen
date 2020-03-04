import React, { Component } from "react";
import Button from "../components/button";
import { Link } from "react-router-dom";

class welcome extends Component {
  render() {
    return (
      <div>
        <Link to="/waitress">
          <Button title="Mesonero" />
        </Link>
        <Link to="/cook">
          <Button title="Cocinero" />
        </Link>
      </div>
    );
  }
}

export default welcome;
