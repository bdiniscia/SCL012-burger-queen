import React, { Component } from 'react';
import '../../App.css';
import './menu.css'
import Button from '../../components/button'
import {breakfast, dinner} from '../../data.json';


class MenuBreakfast extends Component {
  render() {
    return (
      <div className='itemDiv'>
        {breakfast.map(element => {
        return(
          <div key={element.id} className='itemsMenu'>
            <p className='itemName'>{element.name}</p>
            <p className='itemPrice'>${element.price}</p>
          </div>)})}
      </div>
      );
  }
}

class MenuDinner extends Component {
  render() {
    return (
      <div className='itemDiv'>
        {dinner.map(element => {
        return(
          <div key={element.id} className='itemsMenu'>
            <p className='itemName'>{element.name}</p>
            <p className='itemPrice'>${element.price}</p>
          </div>)})}
      </div>
      );
  }
}

class Menu extends Component {
  state = {
    visibleBreakfast: false,
    visibleDinner: false
  }



  render () {
    const _renderBreakfast = () => {
      this.setState({
        visibleBreakfast: !this.state.visibleBreakfast, 
        visibleDinner: false})
    }

    const _renderDinner = () => {
      this.setState({
        visibleDinner: !this.state.visibleDinner, 
        visibleBreakfast: false})
    }


    return (
      <div className='menu'>
        <div className='divButtons'>
          <Button title='Desayuno' onClick={_renderBreakfast}/>
          <Button title='Almuerzo/Cena' onClick={_renderDinner}/>
        </div>
        {this.state.visibleBreakfast ? <MenuBreakfast /> : null}
        {this.state.visibleDinner ? <MenuDinner /> : null}
      </div>
    )
  }

}

export default Menu;
