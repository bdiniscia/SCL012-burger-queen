import React, { Component } from 'react';
import '../../App.css';
import './clientID.css'
import backButton from '../../imagenes/backButton.png'

class clientID extends Component {
    render() {
        return (
            <div className='clientID'>
                <div className='client'>

                <div className='button-back'>
                <img
                alt='backButton'
                src={backButton}/>

                <p className='titleClient' >Nombre del Cliente:</p>
                <input className='inputClient'></input>
                </div>
               
                </div>
               
            </div>
        )
    }

}

export default clientID;
