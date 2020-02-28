import React, { Component } from 'react';
import ClientID from './sections/clientID';
import Menu from './sections/menu';
import Total from './sections/total';
import OrderStats from './sections/orderStats';
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='app'>
        <div className='takingOrder'>
          <ClientID />
          <Menu />
          <Total />
        </div>
        <div className='orderStatus'>
          <OrderStats />
        </div>
      </div>
    )
  }
}

export default App;
