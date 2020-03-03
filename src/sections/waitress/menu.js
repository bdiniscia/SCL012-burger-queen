import React, { Component } from 'react';
import '../../App.css';
import Button from '../../components/button'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class Menu extends Component {

    handleClick = (e) => {
        e.preventDefault()
        alert('Clicked')
    }

    render() {
        return (
            <div className='menu'>
                <Router>
                <div>
                        <Link to="/breakfast">
                            <Button title = 'Desayuno'/>
                        </Link>
                        <Link to="/dinner">
                            <Button title = 'Almuerzo/Cena'/>
                        </Link>

                    <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/breakfast">
                        <Breakfast />
                    </Route>
                    <Route path="/dinner">
                        <Dinner />
                    </Route>
                    </Switch>
                </div>
                </Router>
        </div>
        )
    }

}


function Home() {
  return (
    <div>
      <h2>Elige un menú</h2>
    </div>
  );
}

function Breakfast() {
  return (
    <div>
      <h2>Menú de Desayuno</h2>
    </div>
  );
}

function Dinner() {
  return (
    <div>
      <h2>Menú Almuerzo/Cena</h2>
    </div>
  );
}

export default Menu;