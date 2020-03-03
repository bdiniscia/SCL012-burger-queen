import React, { Component } from 'react';
import '../../App.css';
import Button from '../../components/button'

class Menu extends Component {

    handleClick = (e) => {
        e.preventDefault()
        alert('Button clicked')
    }

    render() {
        return (
            <div className='menu'>
                <Button
                onClick={this.handleClick}
                title = 'Desayuno'
                />
                <Button
                onClick={this.handleClick}
                title = 'Almuerzo/Cena'
                />

            </div>
        )
    }

}

export default Menu;