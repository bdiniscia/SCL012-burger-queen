import React, { Component } from "react";
import "../../App.css";
import "./menu.css";
import Button from "../../components/button";
import meals from "../../data.json";
import Modal from "react-bootstrap/Modal";

// Componente que muestra el menú dependiendo si es breakfast o dinner
class MenuList extends Component {

  state = {
    showModal: false,
  }

  showModal = () => {
    this.setState({
      showModal: true,
    });
  };

  hideModal = () => {
    this.setState({
      showModal: false
    });
  };
  // Clicks en los items del menú
  handleClick = (e, meal) => {
    e.preventDefault();
    console.log(`> meal:`, meal);
    // Si no tiene opciones para personalizar el producto
    if (typeof meal.options === "undefined") {
      return alert("No tiene opciones");
    }

    return (
      this.showModal()
    )
  };

  render() {
    // Mapea y muestra cada uno de los elementos del array escogido (Breakfast o dinner)
    const meals = this.props.meals.map(meal => {
      return (
        <div>
        <div
          key={meal.id}
          className="itemsMenu"
          onClick={e => this.handleClick(e, meal)}
        >
          <p className="itemName">{meal.name}</p>
          <p className="itemPrice">${meal.price}</p>
        </div>
        
        <Modal key={meal.id} show={this.state.showModal} onHide={() => this.hideModal()}>
          <Modal.Header closeButton>
            <Modal.Title>
              {meal.name}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-6">
                <p>Elige el tipo:</p>
                <label class="container">
                  <input
                    type="radio"
                    name="RadioOptions"
                    value="option1"
                    checked={true}
                  />{" "}
                  Pollo
                </label>
                <label class="container">
                  <input type="radio" name="RadioOptions" value="option2" />{" "}
                  Carne
                </label>
                <label class="container">
                  <input type="radio" name="RadioOptions" value="option3" />{" "}
                  Vegetariana
                </label>
              </div>

              <div className="col-6">
                <p>Elige extra:</p>
                <label class="container">
                  <input type="checkbox" checked="checked" /> Queso
                  <span class="checkmark"></span>
                </label>
                <label class="container">
                  <input type="checkbox" checked="checked" /> Huevo
                  <span class="checkmark"></span>
                </label>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button title="Agregar" onClick={null} />
          </Modal.Footer>
        </Modal>
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
  };
  


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
          <MenuList
            meals={this.getMealsByType("breakfast")}
          />
        ) : null}
        {this.state.visibleDinner ? (
          <MenuList
            meals={this.getMealsByType("dinner")}
          />
        ) : null}
      </div>
    );
  }
}

export default Menu;
