import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Button from "../components/button";
import logo from "../imagenes/logo.png";
import "./welcome.css";

class welcome extends Component {
  render() {
    return (
      <Fragment>
        <div className="container-custom">
          <div className="logo">
            <img 
            alt="logo" 
            src={logo} />
            <h1 className="title-custom">¿Cuál es tu rol?</h1>
            <div>
              <div className='button-welcome'>
                <Link to="/waitress">
                    <Button  title="Mesonero" />
                </Link>
              </div>
              <div className='button-welcome'>
                <Link to="/cook">
                  <Button  title="Cocinero" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default welcome;
