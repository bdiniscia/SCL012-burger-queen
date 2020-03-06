import React, { Component } from 'react';
import '../../App.css';
import './clientID.css'
import backButton from '../../imagenes/backButton.png'
import {Dropdown, ButtonToolbar, DropdownButton } from 'react-bootstrap';

class clientID extends Component {

    handleChange = (e) => {
        const cliente = e.target.value
        console.log(cliente)  
    }


    render() {
        return (
            <div className='clientID'>

                <div className='client'>

                <div className='button-back'>
                <img
                alt='backButton'
                src={backButton}/>

                <p className='titleClient'>Nombre del Cliente:</p>
                <input onChange={(e) => this.handleChange(e)} className='inputClient'></input>
                <p className='titleClient'>Mesa:</p>

                <select className='mesa'>
                    <option selected>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                </select>

                </div>
               

                </div>
               

            </div>
        )
    }

}

export default clientID;
