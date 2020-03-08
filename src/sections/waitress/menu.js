import React, { Component } from 'react';
import '../../App.css';
import './menu.css'
import Button from '../../components/button'
import meals from '../../data.json';

class MenuList extends Component {
  render() {
    const meals = this.props.meals.map((meal) => {
      return (
        <div key={meal.id} className='itemsMenu'>
          <p className='itemName'>{meal.name}</p>
          <p className='itemPrice'>${meal.price}</p>
        </div>
      );
    });

    return (
      <div className='itemDiv'>
        { meals }
      </div>
    );
  }
}

class Menu extends Component {
  state = {
    visibleBreakfast: false,
    visibleDinner: false
  }

  getMealsByType(type) {
    return meals.filter((meal) => {
      return meal.type === type;
    });
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
        {this.state.visibleBreakfast ? <MenuList meals={this.getMealsByType('breakfast')}/> : null}
        {this.state.visibleDinner ? <MenuList meals={this.getMealsByType('dinner')}/> : null}
      </div>
    )
  }
}

export default Menu;
