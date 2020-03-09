import React, { Component } from "react";
import "../../App.css";
import "./menu.css";
import Button from "../../components/button";
import meals from "../../data.json";
import Modal from "react-bootstrap/Modal";

// Componente que muestra el menú dependiendo si es breakfast o dinner
class MenuList extends Component {

  // Clicks en los items del menú
  handleClick = (e, meal) => {
    e.preventDefault();
    console.log(`> meal:`, meal);
    // Si no tiene opciones para personalizar el producto
    if (typeof meal.options === "undefined") {
      return alert('No tiene opciones')}
      
      if(meal.id === 'd01'){
      this.props.showModal('simple')
    } else if(meal.id === 'd02'){
      this.props.showModal('doble')
    }
  };

  render() {
    // Mapea y muestra cada uno de los elementos del array escogido (Breakfast o dinner)
    const meals = this.props.meals.map(meal => {
      return (
        <div
          key={meal.id}
          className="itemsMenu"
          onClick={e => this.handleClick(e, meal)}
        >
          <p className="itemName">{meal.name}</p>
          <p className="itemPrice">${meal.price}</p>
        </div>
      );
    });

    return (
      // Se muestra la constante Meals que se declara arriba
      <div className="itemDiv">{meals}</div>
    );
  }
}

class Menu extends Component {
  // Flags para mostrar o ocultar los menús
  state = {
    visibleBreakfast: false,
    visibleDinner: false,
    showModal: false,
    burgerType: ''
  };

  showModal = (type) => {
    this.setState({
      showModal: true,
      burgerType: type
    })
  }

  hideModal = () => {
    this.setState({
      showModal: false
    })
  }

  // Filtra los elemntos de la data de acuerdo al prop que se le pase (breakfast o dinner)
  // y te deja la data filtrada para manipularla en MenuList
  getMealsByType(type) {
    return meals.filter(meal => {
      return meal.type === type;
    });
  }

  render() {
    // Cambios en los flags de acuerdo al botón
    const _renderBreakfast = () => {
      this.setState({
        visibleBreakfast: !this.state.visibleBreakfast,
        visibleDinner: false
      });
    };
    const _renderDinner = () => {
      this.setState({
        visibleBreakfast: false,
        visibleDinner: !this.state.visibleDinner
      });
    };

    return (
      <div className="menu">
        <div className="divButtons">
          <Button title="Desayuno" onClick={_renderBreakfast} />
          <Button title="Almuerzo/Cena" onClick={_renderDinner} />
        </div>
        {this.state.visibleBreakfast ? (
          <MenuList showModal={this.showModal.bind(this)} meals={this.getMealsByType("breakfast")} />
        ) : null}
        {this.state.visibleDinner ? (
          <MenuList showModal={this.showModal.bind(this)} meals={this.getMealsByType("dinner")} />
        ) : null}

        {/* Modal */}
        <Modal show={this.state.showModal} onHide={() => this.hideModal()}>
          <Modal.Header closeButton>
        <Modal.Title>{this.state.burgerType === 'simple' ? 'Hamburguesa Simple' : 'Hamburguesa Doble'}</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button title='Agregar' onClick={null}/>  
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Menu;
